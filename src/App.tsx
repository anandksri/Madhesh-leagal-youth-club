import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { PageId } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { TeamPage } from './pages/TeamPage';
import { InitiativesPage } from './pages/InitiativesPage';
import { LegalAwarenessPage } from './pages/LegalAwarenessPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';
import { SitemapPage } from './pages/SitemapPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { smoothScrollTo } from './utils/scroll';

const PAGE_TITLES: Record<PageId, string> = {
  home: 'Madhesh Legal Youth Club | Legal Awareness & Community Empowerment',
  about: 'About Us | Madhesh Legal Youth Club',
  team: 'Our Team | Madhesh Legal Youth Club',
  initiatives: 'Our Initiatives | Madhesh Legal Youth Club',
  'legal-awareness': 'Legal Awareness & Education | Madhesh Legal Youth Club',
  gallery: 'Photo Archive & Documentation | Madhesh Legal Youth Club',
  contact: 'Contact Us | Madhesh Legal Youth Club',
  sitemap: 'Site Map & Navigation Directory | Madhesh Legal Youth Club',
};

const PAGE_DESCRIPTIONS: Record<PageId, string> = {
  home: 'A non-profit organization based in Birgunj, Nepal, working to promote legal awareness, rights, responsibilities, and access to justice across Nepal.',
  about: 'Learn about Madhesh Legal Youth Club (MLYC), our founding mission in Birgunj, non-profit status, vision, and nationwide legal empowerment goals.',
  team: 'Meet the executive leadership and founders of Madhesh Legal Youth Club including President Shrawan Patel and Secretary Anil Kr. Patel.',
  initiatives: 'Explore our core community initiatives: legal literacy workshops, ward outreach, youth assemblies, and civic rights campaigns in Nepal.',
  'legal-awareness': 'Access simplified constitutional educational guides: know your rights, civic duties, access to local justice, and essential public helplines.',
  gallery: 'View photos from our legal awareness workshops, community dialogues, and youth meetings across Birgunj, Parsa, and Madhesh Province.',
  contact: 'Contact Madhesh Legal Youth Club headquarters in Birgunj, Nepal. Reach out via phone (+977 9823941684) or email for inquiries and volunteering.',
  sitemap: 'Directory of all pages, legal literacy modules, programs, leadership directories, and XML sitemap for search engines.',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  // Read initial page from hash on mount
  useEffect(() => {
    const parseHash = (): PageId => {
      const hash = window.location.hash.replace('#', '').toLowerCase().split('?')[0];
      const validPages: PageId[] = [
        'home',
        'about',
        'team',
        'initiatives',
        'legal-awareness',
        'gallery',
        'contact',
        'sitemap',
      ];
      return validPages.includes(hash as PageId) ? (hash as PageId) : 'home';
    };

    setCurrentPage(parseHash());

    const handleHashChange = () => {
      setCurrentPage(parseHash());
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update document title & meta tags and smoothly scroll to top when page changes
  useEffect(() => {
    const title = PAGE_TITLES[currentPage] || PAGE_TITLES.home;
    const description = PAGE_DESCRIPTIONS[currentPage] || PAGE_DESCRIPTIONS.home;

    document.title = title;

    // Dynamically update standard and OpenGraph meta descriptions
    const descMeta = document.querySelector('meta[name="description"]');
    if (descMeta) descMeta.setAttribute('content', description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', title);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description);

    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', title);

    const twitterDesc = document.querySelector('meta[name="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description);

    smoothScrollTo(0, { duration: 650 });
  }, [currentPage]);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'team':
        return <TeamPage onNavigate={handleNavigate} />;
      case 'initiatives':
        return <InitiativesPage onNavigate={handleNavigate} />;
      case 'legal-awareness':
        return <LegalAwarenessPage onNavigate={handleNavigate} />;
      case 'gallery':
        return <GalleryPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />;
      case 'sitemap':
        return <SitemapPage onNavigate={handleNavigate} />;
      default:
        return <NotFoundPage onNavigateHome={() => handleNavigate('home')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-[#174A7E]/20 selection:text-[#0B1F3A]">
      {/* Top Header */}
      <Header currentPage={currentPage} onNavigate={handleNavigate} />

      {/* Main Page Content with subtle page transitions */}
      <main className="flex-1 w-full" id="main-content">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{
              duration: 0.32,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
