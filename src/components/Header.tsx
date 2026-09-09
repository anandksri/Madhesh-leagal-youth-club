import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'motion/react';
import { PageId } from '../types';
import { NAV_ITEMS, ORGANIZATION_CONFIG } from '../data/organizationData';
import { Logo } from './Logo';
import { Menu, X, Phone, Mail, ArrowRight } from 'lucide-react';
import { smoothScrollTo } from '../utils/scroll';

interface HeaderProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 15);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on escape key and control body scroll
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    smoothScrollTo(0, { duration: 650 });
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-200 ease-out w-full bg-white ${
          isScrolled
            ? 'shadow-md border-b border-slate-200 py-2.5 sm:py-3'
            : 'border-b border-slate-100 py-3.5 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo on Left */}
            <button
              type="button"
              onClick={() => handleNavClick('home')}
              className="text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B1F3A] rounded-md transition-opacity hover:opacity-90 cursor-pointer"
              aria-label="Madhesh Legal Youth Club Home"
            >
              <Logo variant="dark" showSubtitle={false} />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
              {NAV_ITEMS.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => handleNavClick(item.id)}
                    className={`px-3 py-1.5 text-sm font-medium tracking-wide rounded-md transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'text-[#0B1F3A] bg-slate-100 font-semibold border-b-2 border-[#D4A72C]'
                        : 'text-slate-600 hover:text-[#0B1F3A] hover:bg-slate-50'
                    }`}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>

            {/* Header Action Button (Desktop) */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                type="button"
                onClick={() => handleNavClick('contact')}
                className="inline-flex items-center justify-center px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#0B1F3A] hover:bg-[#174A7E] rounded-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 shadow-xs hover:shadow-sm cursor-pointer"
              >
                Get Involved
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden items-center">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setMobileMenuOpen((prev) => !prev);
                }}
                className="p-2.5 rounded-lg text-[#0B1F3A] bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] cursor-pointer touch-manipulation"
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Render Animated Mobile Drawer via Portal directly to body */}
      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileMenuOpen && (
              <div
                className="fixed inset-0 z-[9999] lg:hidden"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
              >
                {/* Smooth Animated Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.24, ease: 'easeInOut' }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-xs"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-hidden="true"
                />

                {/* Smooth Slide-in Drawer Panel */}
                <motion.div
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{
                    type: 'spring',
                    damping: 30,
                    stiffness: 300,
                    mass: 0.8,
                  }}
                  className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-2xl flex flex-col justify-between overflow-y-auto border-l border-slate-200 z-[10000]"
                >
                  <div>
                    <div className="p-4 flex items-center justify-between border-b border-slate-100 bg-[#F6F8FB]">
                      <Logo variant="dark" showSubtitle={false} />
                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(false)}
                        className="p-2.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-200 transition-colors cursor-pointer"
                        aria-label="Close menu"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Mobile Nav Links with Staggered Fade */}
                    <div className="px-4 py-5 space-y-2">
                      {NAV_ITEMS.map((item, index) => {
                        const isActive = currentPage === item.id;
                        return (
                          <motion.button
                            key={item.id}
                            initial={{ opacity: 0, x: 12 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                              delay: 0.04 * index,
                              duration: 0.2,
                              ease: 'easeOut',
                            }}
                            type="button"
                            onClick={() => handleNavClick(item.id)}
                            className={`w-full flex items-center justify-between px-3.5 py-3 text-sm font-semibold rounded-lg transition-colors text-left cursor-pointer ${
                              isActive
                                ? 'bg-[#0B1F3A] text-white shadow-xs'
                                : 'text-slate-700 hover:bg-slate-100 hover:text-[#0B1F3A]'
                            }`}
                          >
                            <span>{item.label}</span>
                            {isActive && <span className="w-2 h-2 rounded-full bg-[#D4A72C]" />}
                          </motion.button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Mobile Contact Quick Actions & Footer */}
                  <div className="p-4 border-t border-slate-200 bg-[#F6F8FB] space-y-3">
                    <button
                      type="button"
                      onClick={() => handleNavClick('contact')}
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-[#0B1F3A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#174A7E] transition-colors cursor-pointer"
                    >
                      <span>Get in Touch</span>
                      <ArrowRight className="w-4 h-4 text-[#D4A72C]" />
                    </button>
                    <div className="pt-2 text-xs text-slate-600 space-y-2">
                      <a
                        href={`tel:${ORGANIZATION_CONFIG.phone}`}
                        className="flex items-center gap-2.5 text-slate-800 hover:text-[#174A7E] font-medium"
                      >
                        <Phone className="w-4 h-4 text-[#D4A72C]" />
                        <span>{ORGANIZATION_CONFIG.phone}</span>
                      </a>
                      <a
                        href={`mailto:${ORGANIZATION_CONFIG.email}`}
                        className="flex items-center gap-2 text-slate-800 hover:text-[#174A7E] truncate font-medium"
                      >
                        <Mail className="w-3.5 h-3.5 text-[#D4A72C]" />
                        <span className="truncate">{ORGANIZATION_CONFIG.email}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};
