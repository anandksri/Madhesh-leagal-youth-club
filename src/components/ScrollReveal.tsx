import React, { useEffect, useRef, useState, ElementType } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number; // Delay in milliseconds (stagger)
  duration?: number; // Duration in milliseconds (default: 700ms)
  yOffset?: number; // Initial translateY distance in pixels (default: 20px)
  className?: string;
  as?: ElementType;
  id?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  duration = 700,
  yOffset = 20,
  className = '',
  as: Component = 'div',
  id,
}) => {
  const elementRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== 'undefined') {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        setIsVisible(true);
        return;
      }
    }

    const node = elementRef.current;
    if (!node) return;

    // Use IntersectionObserver with mobile-adaptive rootMargin
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -30px 0px',
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  const isReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const style: React.CSSProperties = isReducedMotion
    ? {}
    : {
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : `translateY(${yOffset}px)`,
        transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
        willChange: isVisible ? 'auto' : 'opacity, transform',
      };

  return (
    <Component
      ref={elementRef}
      id={id}
      style={style}
      className={className}
    >
      {children}
    </Component>
  );
};
