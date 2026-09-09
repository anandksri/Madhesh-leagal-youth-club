import React, { useState } from 'react';
import { PageId, GalleryItem } from '../types';
import { PageHero } from '../components/PageHero';
import { Lightbox } from '../components/Lightbox';
import { GALLERY_ITEMS } from '../data/organizationData';
import { ScrollReveal } from '../components/ScrollReveal';
import { Camera } from 'lucide-react';

interface GalleryPageProps {
  onNavigate: (page: PageId) => void;
}

type FilterCategory = 'All' | 'Awareness Programs' | 'Community Outreach' | 'Youth Meetings';

export const GalleryPage: React.FC<GalleryPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const categories: FilterCategory[] = [
    'All',
    'Awareness Programs',
    'Community Outreach',
    'Youth Meetings',
  ];

  const filteredItems =
    selectedCategory === 'All'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        title="Gallery"
        subtitle="Visual moments from our legal awareness programs and community initiatives in Nepal."
        currentPageTitle="Gallery"
        onNavigateHome={() => onNavigate('home')}
        badge="Photo Gallery"
        badgeIcon={<Camera className="w-4 h-4 text-[#D4A72C]" />}
      />

      {/* Gallery Section */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <ScrollReveal>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`btn-interactive px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide cursor-pointer transition-all ${
                      isActive
                        ? 'bg-[#0B1F3A] text-white shadow-xs'
                        : 'bg-[#F6F8FB] text-slate-700 hover:bg-slate-200 hover:text-[#0B1F3A]'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </ScrollReveal>

          {/* Clean Photo Grid: Just Photo and Title */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 40}>
                <div
                  onClick={() => setActiveLightboxItem(item)}
                  className="card-hover-lift group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xs hover:border-[#0B1F3A]/30 cursor-pointer flex flex-col transition-all"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      setActiveLightboxItem(item);
                    }
                  }}
                  aria-label={`View photo: ${item.title}`}
                >
                  {/* Photo */}
                  <div className="relative aspect-4/3 w-full overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.alt || item.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover image-zoom-subtle"
                      loading="lazy"
                    />
                    {/* Subtle hover overlay indicator */}
                    <div className="absolute inset-0 bg-[#0B1F3A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </div>

                  {/* Title only */}
                  <div className="p-4 sm:p-5 bg-white flex items-center justify-between border-t border-slate-100">
                    <h3 className="font-bold text-base sm:text-lg text-[#0B1F3A] group-hover:text-[#174A7E] transition-colors line-clamp-1">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Clean Photo Lightbox / Viewer */}
      <Lightbox
        item={activeLightboxItem}
        items={filteredItems}
        onClose={() => setActiveLightboxItem(null)}
        onSelect={(item) => setActiveLightboxItem(item)}
      />
    </div>
  );
};
