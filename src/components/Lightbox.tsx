import React, { useEffect, useCallback, useRef } from 'react';
import { GalleryItem } from '../types';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  item: GalleryItem | null;
  items: GalleryItem[];
  onClose: () => void;
  onSelect: (item: GalleryItem) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  item,
  items,
  onClose,
  onSelect,
}) => {
  const touchStartX = useRef<number | null>(null);

  const currentIndex = items.findIndex((i) => i.id === item?.id);

  const handleNext = useCallback(() => {
    if (items.length <= 1) return;
    const nextIdx = (currentIndex + 1) % items.length;
    onSelect(items[nextIdx]);
  }, [currentIndex, items, onSelect]);

  const handlePrev = useCallback(() => {
    if (items.length <= 1) return;
    const prevIdx = (currentIndex - 1 + items.length) % items.length;
    onSelect(items[prevIdx]);
  }, [currentIndex, items, onSelect]);

  // Keyboard navigation
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, handleNext, handlePrev, onClose]);

  // Touch Swipe for mobile devices
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = null;
  };

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col justify-between bg-black/95 backdrop-blur-sm transition-opacity animate-in fade-in duration-200 select-none p-4 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo: ${item.title}`}
    >
      {/* Top Header Bar: Close Button */}
      <div
        className="w-full flex items-center justify-end z-20 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
          title="Close (Esc)"
          aria-label="Close photo viewer"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Main Image Stage */}
      <div
        className="relative flex-1 w-full flex items-center justify-center overflow-hidden my-auto py-2"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Previous Button */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="btn-interactive absolute left-2 sm:left-4 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 shadow-xl cursor-pointer transition-all"
            aria-label="Previous image"
            title="Previous photograph"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        )}

        {/* Central Image */}
        <div className="relative max-w-5xl max-h-[75vh] flex items-center justify-center">
          <img
            src={item.image}
            alt={item.alt || item.title}
            referrerPolicy="no-referrer"
            className="max-h-[72vh] w-auto max-w-full object-contain rounded-xl shadow-2xl"
          />
        </div>

        {/* Next Button */}
        {items.length > 1 && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="btn-interactive absolute right-2 sm:right-4 z-20 p-3 sm:p-4 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 shadow-xl cursor-pointer transition-all"
            aria-label="Next image"
            title="Next photograph"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
          </button>
        )}
      </div>

      {/* Bottom: Just the Title */}
      <div
        className="w-full text-center py-3 z-20"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-base sm:text-xl font-bold text-white tracking-wide">
          {item.title}
        </h3>
      </div>
    </div>
  );
};
