import React from 'react';
import { PageId } from '../types';
import {
  KEY_STATS,
  ORGANIZATION_CONFIG,
  PURPOSE_CARDS,
  INITIATIVES,
} from '../data/organizationData';
import {
  Scale,
  ShieldCheck,
  Users,
  Sparkles,
  ArrowRight,
  BookOpen,
  MapPin,
  CheckCircle,
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const getPurposeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-6 h-6 text-[#0B1F3A]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#0B1F3A]" />;
      case 'Users':
        return <Users className="w-6 h-6 text-[#0B1F3A]" />;
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#0B1F3A]" />;
      default:
        return <Scale className="w-6 h-6 text-[#0B1F3A]" />;
    }
  };

  // 3 focus initiatives for home page
  const focusInitiatives = INITIATIVES.slice(0, 3);

  return (
    <div className="w-full">
      {/* 6. HERO SECTION */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/madheshclub-banner.jpg"
            alt="Community gathering for legal awareness in Nepal"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center scale-100 transition-transform duration-1000 ease-out"
          />
          {/* Subtle Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/90 via-[#0B1F3A]/80 to-[#0B1F3A]/70" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            {/* Small Label Above Heading */}
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/10 backdrop-blur-xs border border-white/15 text-xs font-semibold uppercase tracking-widest text-[#D4A72C]">
              <span>MADHESH LEGAL YOUTH CLUB</span>
            </div>

            {/* Hero Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Know Your Rights.
              <br />
              <span className="text-[#D4A72C]">Know Your Law.</span>
            </h1>

            {/* Supporting Sentence */}
            <p className="mt-6 text-lg sm:text-xl text-slate-200 max-w-2xl font-light leading-relaxed">
              {ORGANIZATION_CONFIG.supportingLine}
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onNavigate('about')}
                className="btn-interactive inline-flex items-center justify-center px-6 py-3 text-sm font-semibold tracking-wide text-[#0B1F3A] bg-white hover:bg-slate-100 rounded-lg shadow-sm cursor-pointer text-center"
              >
                Learn About Us
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="btn-interactive inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold tracking-wide text-white bg-[#174A7E] hover:bg-[#1f5c9b] border border-[#D4A72C]/30 rounded-lg cursor-pointer text-center"
              >
                <span>Get Involved</span>
                <ArrowRight className="w-4 h-4 text-[#D4A72C]" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. HOME — INTRODUCTION */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left = Text */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-[#174A7E] bg-[#F6F8FB] rounded-md">
                  Civic Mission
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A]">
                  Legal Awareness for Everyone
                </h2>
                <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                  Madhesh Legal Youth Club works to promote legal awareness, empower communities and help people understand their rights and responsibilities.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Rooted in Birgunj with a nationwide ambition across Nepal, our youth-driven club facilitates accessible legal knowledge for underserved communities, students, and citizens seeking civic justice.
                </p>
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('about')}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0B1F3A] hover:text-[#174A7E] group cursor-pointer transition-colors"
                  >
                    <span className="border-b-2 border-[#D4A72C] pb-0.5 group-hover:border-[#174A7E] transition-colors">
                      Learn More About Our Journey
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              {/* Right = Organization Image */}
              <div className="lg:col-span-6">
                <div className="group relative rounded-2xl overflow-hidden shadow-md border border-slate-100 aspect-4/3">
                  <img
                    src="/images/community_outreach.jpg"
                    alt="Madhesh Legal Youth Club community outreach program"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover image-zoom-subtle"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-xs p-4 rounded-xl shadow-xs border border-slate-100 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-[#F6F8FB] flex items-center justify-center text-[#0B1F3A]">
                        <MapPin className="w-5 h-5 text-[#D4A72C]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-[#0B1F3A]">Grassroots Outreach</p>
                        <p className="text-[11px] text-slate-500">Birgunj &amp; Madhesh Province</p>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold text-[#174A7E] bg-slate-100 px-2.5 py-1 rounded-full">
                      Active
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 8. HOME — KEY STATS */}
      <section className="py-16 bg-[#F6F8FB] border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {KEY_STATS.map((stat, idx) => (
              <ScrollReveal key={idx} delay={idx * 80}>
                <div className="card-hover-lift bg-white p-6 sm:p-8 rounded-xl border border-slate-200/80 shadow-xs flex flex-col justify-center text-center">
                  <span className="text-4xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
                    {stat.value}
                  </span>
                  <span className="mt-2 text-xs font-bold text-[#174A7E] uppercase tracking-wider">
                    {stat.label}
                  </span>
                  {stat.description && (
                    <span className="mt-1 text-xs text-slate-500 font-normal">
                      {stat.description}
                    </span>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9. HOME — OUR PURPOSE */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-[#174A7E] bg-[#F6F8FB] rounded-md mb-3">
                Core Principles
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A]">
                What We Stand For
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                A clear dedication to grassroots legal literacy, constitutional empowerment, and social justice.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PURPOSE_CARDS.map((card, idx) => (
              <ScrollReveal key={card.id} delay={idx * 80}>
                <div className="card-hover-lift bg-[#F6F8FB] p-6 rounded-xl border border-slate-200/80 hover:border-slate-300 flex flex-col justify-between group hover:bg-white hover:shadow-sm h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-2xs group-hover:border-[#D4A72C]/50 transition-colors">
                        {getPurposeIcon(card.iconName)}
                      </div>
                      <span className="text-xs font-bold text-slate-400">
                        {card.number}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0B1F3A] mb-2">
                      {card.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 10. HOME — INITIATIVES ("Our Focus") */}
      <section className="py-16 sm:py-24 bg-[#F6F8FB] border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
              <div>
                <div className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-[#174A7E] bg-white rounded-md mb-3 border border-slate-200">
                  Action Areas
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A]">
                  Our Focus
                </h2>
              </div>
              <button
                onClick={() => onNavigate('initiatives')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#174A7E] hover:text-[#0B1F3A] cursor-pointer transition-colors"
              >
                <span>View All Initiatives</span>
                <ArrowRight className="w-4 h-4 text-[#D4A72C]" />
              </button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusInitiatives.map((initiative, idx) => (
              <ScrollReveal key={initiative.id} delay={idx * 80}>
                <div className="card-hover-lift group bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md flex flex-col h-full">
                  <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover image-zoom-subtle"
                    />
                    <span className="absolute top-3 left-3 bg-[#0B1F3A]/90 backdrop-blur-xs text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                      {initiative.tag}
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-[#0B1F3A] mb-2 group-hover:text-[#174A7E] transition-colors">
                        {initiative.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed mb-4">
                        {initiative.shortDesc}
                      </p>
                    </div>
                    <button
                      onClick={() => onNavigate('initiatives')}
                      className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#174A7E] hover:text-[#0B1F3A] mt-2 cursor-pointer transition-colors"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 11. HOME — QUOTE / MISSION */}
      <section className="py-20 bg-[#0B1F3A] text-white text-center border-b border-slate-800">
        <ScrollReveal>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="w-12 h-1 bg-[#D4A72C] mx-auto mb-8 rounded-full" />
            <blockquote className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-white leading-snug">
              “Awareness is the first step toward justice.”
            </blockquote>
            <p className="mt-4 text-xs sm:text-sm font-semibold text-[#D4A72C] uppercase tracking-widest">
              Madhesh Legal Youth Club
            </p>
            <p className="mt-1 text-xs text-slate-400">
              Birgunj, Nepal • Promoting Legal Awareness Across Nepal
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* 12. HOME — CALL TO ACTION */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-[#F6F8FB] border border-slate-200 rounded-2xl p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A]">
                Be Aware. Be Empowered.
              </h2>
              <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
                Legal awareness begins with a question. Join us in building a more informed society.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-interactive w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide text-white bg-[#0B1F3A] hover:bg-[#174A7E] rounded-lg shadow-xs cursor-pointer"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-interactive w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-sm font-semibold tracking-wide text-[#0B1F3A] bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs cursor-pointer"
                >
                  Join the Movement
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
