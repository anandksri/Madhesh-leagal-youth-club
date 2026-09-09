/**
 * High-performance smooth scrolling utility with custom cubic easing.
 * Provides a fluid, natural, Apple-like scroll experience (600–850ms).
 * Respects 'prefers-reduced-motion'.
 */

export interface SmoothScrollOptions {
  duration?: number;
  offset?: number;
  callback?: () => void;
}

export function smoothScrollTo(
  target: number | HTMLElement | string,
  options?: SmoothScrollOptions
): void {
  if (typeof window === 'undefined') return;

  // Respect user preference for reduced motion
  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let targetY = 0;
  const headerOffset = options?.offset ?? 76; // Header height compensation

  if (typeof target === 'number') {
    targetY = target;
  } else if (typeof target === 'string') {
    const el = document.querySelector(target);
    if (el) {
      const rect = el.getBoundingClientRect();
      targetY = rect.top + window.pageYOffset - headerOffset;
    } else {
      targetY = 0;
    }
  } else if (target instanceof HTMLElement) {
    const rect = target.getBoundingClientRect();
    targetY = rect.top + window.pageYOffset - headerOffset;
  }

  // Constrain target within scrollable boundaries
  const maxScroll = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight
  );
  targetY = Math.max(0, Math.min(targetY, maxScroll));

  if (prefersReduced) {
    window.scrollTo(0, targetY);
    options?.callback?.();
    return;
  }

  const startY = window.pageYOffset;
  const distance = targetY - startY;

  // If already at or within 4px of target, resolve immediately
  if (Math.abs(distance) < 4) {
    options?.callback?.();
    return;
  }

  // Adaptive duration based on scroll distance (between 600ms and 850ms)
  const isMobile = window.innerWidth < 640;
  const calculatedDuration = Math.min(
    isMobile ? 700 : 850,
    Math.max(isMobile ? 500 : 600, Math.abs(distance) * 0.45)
  );
  const duration = options?.duration ?? calculatedDuration;
  const startTime = performance.now();

  // Natural smooth cubic bezier easing: cubic-bezier(0.22, 1, 0.36, 1)
  function easeOutQuint(t: number): number {
    return 1 - Math.pow(1 - t, 5);
  }

  function easeOutCubic(t: number): number {
    return 1 - Math.pow(1 - t, 3);
  }

  // Custom bezier approx: easeOutQuart with soft tail
  function naturalEase(t: number): number {
    // Blends cubic and quintic for natural acceleration & gentle deceleration
    return 0.7 * easeOutCubic(t) + 0.3 * easeOutQuint(t);
  }

  let animationFrameId: number;

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = naturalEase(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(step);
    } else {
      window.scrollTo(0, targetY);
      options?.callback?.();
    }
  }

  animationFrameId = requestAnimationFrame(step);
}
