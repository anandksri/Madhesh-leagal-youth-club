import React from 'react';
import { PageId } from '../types';
import { NAV_ITEMS, ORGANIZATION_CONFIG } from '../data/organizationData';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, ArrowUp, Shield } from 'lucide-react';
import { smoothScrollTo } from '../utils/scroll';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    smoothScrollTo(0, { duration: 650 });
  };

  const handleNav = (pageId: PageId) => {
    onNavigate(pageId);
    smoothScrollTo(0, { duration: 650 });
  };

  return (
    <footer className="bg-[#0B1F3A] text-slate-200 border-t border-slate-800" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Purpose (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="cursor-pointer" onClick={() => handleNav('home')}>
              <Logo variant="light" />
            </div>
            <p className="text-slate-300 text-sm font-medium max-w-md leading-relaxed">
              Building a legally aware and empowered society.
            </p>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md pt-1">
              Madhesh Legal Youth Club is a dedicated non-profit organization promoting civic rights education, grassroots literacy, and access to justice across Nepal.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-300">
              <Shield className="w-4 h-4 text-[#D4A72C]" />
              <span>Registered Civic Non-Profit • Birgunj, Nepal</span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#D4A72C] font-bold">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="text-sm text-slate-300 hover:text-white hover:underline underline-offset-4 transition-colors cursor-pointer text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact & Headquarters (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-widest text-[#D4A72C] font-bold">
              Contact &amp; Location
            </h3>
            <ul className="space-y-3 text-xs sm:text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#D4A72C] shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-white block">Headquarters:</span>
                  <span>{ORGANIZATION_CONFIG.location}</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#D4A72C] shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-white block">Phone:</span>
                  <a
                    href={`tel:${ORGANIZATION_CONFIG.phone}`}
                    className="hover:text-white hover:underline transition-colors"
                  >
                    {ORGANIZATION_CONFIG.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#D4A72C] shrink-0 mt-1" />
                <div>
                  <span className="font-semibold text-white block">Email:</span>
                  <a
                    href={`mailto:${ORGANIZATION_CONFIG.email}`}
                    className="hover:text-white hover:underline break-all transition-colors"
                  >
                    {ORGANIZATION_CONFIG.email}
                  </a>
                </div>
              </li>
            </ul>

            <div className="pt-2">
              <button
                onClick={() => handleNav('contact')}
                className="inline-flex items-center gap-2 text-xs font-semibold text-white px-4 py-2 rounded-lg bg-[#174A7E] hover:bg-[#1f5c9b] transition-colors cursor-pointer"
              >
                <span>Send a Message</span>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer Note */}
        <div className="mt-12 pt-6 border-t border-slate-800 text-xs text-slate-400 leading-relaxed max-w-4xl">
          <span className="font-semibold text-slate-300 uppercase tracking-wider block mb-1">
            General Awareness Notice:
          </span>
          {ORGANIZATION_CONFIG.disclaimer}
        </div>
      </div>

      {/* Bottom Sub-footer */}
      <div className="bg-[#071426] border-t border-slate-800/80 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Madhesh Legal Youth Club. All rights reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Developed by</span>
            <a
              href="https://anandkeshari.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4A72C] hover:text-white font-medium hover:underline transition-colors"
            >
              Anand Keshari
            </a>
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
