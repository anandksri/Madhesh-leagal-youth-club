import React from 'react';
import { PageId } from '../types';
import { PageHero } from '../components/PageHero';
import { INITIATIVES } from '../data/organizationData';
import {
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface InitiativesPageProps {
  onNavigate: (page: PageId) => void;
}

export const InitiativesPage: React.FC<InitiativesPageProps> = ({
  onNavigate,
}) => {
  return (
    <div className="w-full">
      {/* Reusable Page Hero */}
      <PageHero
        title="Our Initiatives"
        subtitle="Dedicated action pathways designed to promote legal literacy, community empowerment, and civic responsibility."
        currentPageTitle="Our Initiatives"
        onNavigateHome={() => onNavigate('home')}
      />

      {/* Initiatives Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {INITIATIVES.map((item, index) => (
              <ScrollReveal key={item.id} delay={index * 80}>
                <div
                  className="card-hover-lift bg-[#F6F8FB] rounded-2xl border border-slate-200 overflow-hidden shadow-xs flex flex-col justify-between group h-full"
                >
                  <div>
                    {/* Image container */}
                    <div className="relative aspect-16/10 overflow-hidden bg-slate-200">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover image-zoom-subtle"
                      />
                      <div className="absolute top-3 left-3 bg-[#0B1F3A]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-md">
                        {item.tag}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-5">
                        {item.shortDesc}
                      </p>

                      {/* Highlights */}
                      <div className="space-y-2.5 pt-3 border-t border-slate-200/80">
                        {item.highlights.map((highlight, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                          >
                            <CheckCircle2 className="w-4 h-4 text-[#174A7E] shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer action */}
                  <div className="p-6 pt-0">
                    <button
                      onClick={() => onNavigate('contact')}
                      className="btn-interactive w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#0B1F3A] bg-white border border-slate-300 hover:border-[#0B1F3A] hover:bg-slate-50 rounded-lg cursor-pointer"
                    >
                      <span>Support This Initiative</span>
                      <ArrowRight className="w-4 h-4 text-[#D4A72C]" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action card */}
      <section className="py-16 sm:py-20 bg-[#F6F8FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A]">
              Have a civic awareness initiative in mind?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 max-w-xl mx-auto leading-relaxed">
              We actively collaborate with student associations, community leaders, and local wards across Nepal.
            </p>
            <div className="mt-6">
              <button
                onClick={() => onNavigate('contact')}
                className="btn-interactive inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#174A7E] rounded-lg shadow-xs cursor-pointer"
              >
                Collaborate With Us
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
