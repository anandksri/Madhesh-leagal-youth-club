import React, { useState } from 'react';
import { PageId } from '../types';
import { PageHero } from '../components/PageHero';
import {
  ORGANIZATION_CONFIG,
  NAV_ITEMS,
  INITIATIVES,
  LEGAL_TOPICS,
  LEADERSHIP_MEMBERS,
} from '../data/organizationData';
import {
  Compass,
  BookOpen,
  Users,
  Image as ImageIcon,
  Phone,
  FileCode,
  ExternalLink,
  ChevronRight,
  Search,
  CheckCircle,
  Home,
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface SitemapPageProps {
  onNavigate: (page: PageId) => void;
}

export const SitemapPage: React.FC<SitemapPageProps> = ({ onNavigate }) => {
  const [searchFilter, setSearchFilter] = useState('');

  const query = searchFilter.toLowerCase().trim();

  // Filter sections if search term is active
  const matches = (text: string) => !query || text.toLowerCase().includes(query);

  return (
    <div className="w-full">
      {/* Page Hero */}
      <PageHero
        title="Site Map & Directory"
        subtitle="Complete architectural overview and directory of all public pages, legal awareness topics, initiatives, and resources."
        badge="Navigation Index"
        badgeIcon={<Compass className="w-4 h-4 text-[#D4A72C]" />}
      />

      {/* Breadcrumb Bar */}
      <nav aria-label="Breadcrumb" className="bg-[#F6F8FB] border-b border-slate-200 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center space-x-2 text-xs sm:text-sm text-slate-500">
            <li>
              <button
                onClick={() => onNavigate('home')}
                className="hover:text-[#0B1F3A] flex items-center gap-1 cursor-pointer"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </button>
            </li>
            <li>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
            </li>
            <li className="font-semibold text-[#0B1F3A] aria-current-page">
              Site Map
            </li>
          </ol>
        </div>
      </nav>

      {/* Main Sitemap Content */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search within Sitemap & Overview */}
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 sm:p-8 bg-[#F6F8FB] rounded-2xl border border-slate-200 mb-12">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-[#0B1F3A]">
                  Explore Website Architecture
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Access any page, educational curriculum, initiative, or leadership profile directly.
                </p>
              </div>

              {/* Quick Search */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchFilter}
                  onChange={(e) => setSearchFilter(e.target.value)}
                  placeholder="Filter sitemap topics..."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-slate-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] transition-colors"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Grid of Site Sections */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Section 1: Main Pages */}
            <ScrollReveal delay={0}>
              <div className="card-hover-lift p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                    <div className="w-9 h-9 rounded-lg bg-[#0B1F3A] text-[#D4A72C] flex items-center justify-center">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#0B1F3A]">Core Pages</h3>
                      <p className="text-xs text-slate-500">Primary website navigation</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {NAV_ITEMS.map((item) => {
                      if (!matches(item.label)) return null;
                      return (
                        <li key={item.id}>
                          <button
                            onClick={() => onNavigate(item.id)}
                            className="btn-interactive w-full text-left flex items-center justify-between p-2 rounded-lg text-sm font-medium text-slate-700 hover:text-[#0B1F3A] hover:bg-slate-50 transition-colors cursor-pointer group"
                          >
                            <span>{item.label}</span>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0B1F3A] transition-transform group-hover:translate-x-0.5" />
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
                  <span>Fast internal single-page routes</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 2: Legal Awareness Curriculum */}
            <ScrollReveal delay={100}>
              <div className="card-hover-lift p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                    <div className="w-9 h-9 rounded-lg bg-[#174A7E] text-[#D4A72C] flex items-center justify-center">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#0B1F3A]">Legal Awareness Modules</h3>
                      <p className="text-xs text-slate-500">Educational civic resources</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {LEGAL_TOPICS.map((topic) => {
                      if (!matches(topic.title) && !matches(topic.category)) return null;
                      return (
                        <li key={topic.id}>
                          <button
                            onClick={() => onNavigate('legal-awareness')}
                            className="btn-interactive w-full text-left flex flex-col p-2 rounded-lg text-sm text-slate-700 hover:text-[#0B1F3A] hover:bg-slate-50 transition-colors cursor-pointer group"
                          >
                            <span className="font-semibold text-slate-900 group-hover:text-[#174A7E]">
                              {topic.title}
                            </span>
                            <span className="text-xs text-slate-500">
                              {topic.category}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
                  <span>Constitutional &amp; everyday law modules</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 3: Initiatives & Programs */}
            <ScrollReveal delay={200}>
              <div className="card-hover-lift p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                    <div className="w-9 h-9 rounded-lg bg-[#0B1F3A] text-[#D4A72C] flex items-center justify-center">
                      <CheckCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#0B1F3A]">Initiatives &amp; Focus</h3>
                      <p className="text-xs text-slate-500">Community campaigns</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {INITIATIVES.map((init) => {
                      if (!matches(init.title) && !matches(init.tag)) return null;
                      return (
                        <li key={init.id}>
                          <button
                            onClick={() => onNavigate('initiatives')}
                            className="btn-interactive w-full text-left flex items-center justify-between p-2 rounded-lg text-sm text-slate-700 hover:text-[#0B1F3A] hover:bg-slate-50 transition-colors cursor-pointer group"
                          >
                            <span className="font-medium text-slate-900 group-hover:text-[#174A7E]">
                              {init.title}
                            </span>
                            <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                              {init.tag}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
                  <span>Grassroots outreach programs</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 4: Leadership & Governance */}
            <ScrollReveal delay={300}>
              <div className="card-hover-lift p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                    <div className="w-9 h-9 rounded-lg bg-[#174A7E] text-[#D4A72C] flex items-center justify-center">
                      <Users className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#0B1F3A]">Team &amp; Leadership</h3>
                      <p className="text-xs text-slate-500">Executive committee</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {LEADERSHIP_MEMBERS.map((member) => {
                      if (!matches(member.name) && !matches(member.role)) return null;
                      return (
                        <li key={member.id}>
                          <button
                            onClick={() => onNavigate('team')}
                            className="btn-interactive w-full text-left flex items-center justify-between p-2 rounded-lg text-sm text-slate-700 hover:text-[#0B1F3A] hover:bg-slate-50 transition-colors cursor-pointer group"
                          >
                            <span className="font-semibold text-slate-900 group-hover:text-[#174A7E]">
                              {member.name}
                            </span>
                            <span className="text-xs font-medium text-[#174A7E]">
                              {member.role}
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
                  <span>30+ dedicated youth members &amp; volunteers</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 5: Photo Gallery Categories */}
            <ScrollReveal delay={400}>
              <div className="card-hover-lift p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                    <div className="w-9 h-9 rounded-lg bg-[#0B1F3A] text-[#D4A72C] flex items-center justify-center">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#0B1F3A]">Photo Documentation</h3>
                      <p className="text-xs text-slate-500">Visual event archive</p>
                    </div>
                  </div>

                  <ul className="space-y-2.5">
                    {['All Photographs', 'Awareness Programs', 'Community Outreach', 'Youth Meetings'].map((cat) => (
                      <li key={cat}>
                        <button
                          onClick={() => onNavigate('gallery')}
                          className="btn-interactive w-full text-left flex items-center justify-between p-2 rounded-lg text-sm font-medium text-slate-700 hover:text-[#0B1F3A] hover:bg-slate-50 transition-colors cursor-pointer group"
                        >
                          <span>{cat}</span>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-[#0B1F3A]" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
                  <span>High-resolution event viewer with zoom &amp; download</span>
                </div>
              </div>
            </ScrollReveal>

            {/* Section 6: Technical Search Engine Assets */}
            <ScrollReveal delay={500}>
              <div className="card-hover-lift p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4 pb-3 border-b border-slate-100">
                    <div className="w-9 h-9 rounded-lg bg-[#174A7E] text-[#D4A72C] flex items-center justify-center">
                      <FileCode className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-[#0B1F3A]">Search Engine Protocols</h3>
                      <p className="text-xs text-slate-500">Machine-readable index</p>
                    </div>
                  </div>

                  <ul className="space-y-3 text-sm">
                    <li>
                      <a
                        href="/sitemap.xml"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-interactive flex items-center justify-between p-2 rounded-lg text-slate-700 hover:text-[#0B1F3A] hover:bg-slate-50 transition-colors"
                      >
                        <div>
                          <span className="font-semibold block text-slate-900">XML Sitemap</span>
                          <span className="text-xs text-slate-500">/sitemap.xml</span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-[#D4A72C]" />
                      </a>
                    </li>
                    <li>
                      <a
                        href="/robots.txt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-interactive flex items-center justify-between p-2 rounded-lg text-slate-700 hover:text-[#0B1F3A] hover:bg-slate-50 transition-colors"
                      >
                        <div>
                          <span className="font-semibold block text-slate-900">Robots Directive</span>
                          <span className="text-xs text-slate-500">/robots.txt</span>
                        </div>
                        <ExternalLink className="w-4 h-4 text-[#D4A72C]" />
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-400">
                  <span>Indexed by Google, Bing &amp; DuckDuckGo</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Quick Contact & Inquiries Bar */}
          <ScrollReveal delay={200}>
            <div className="mt-14 p-8 bg-[#0B1F3A] text-white rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-lg font-bold text-white">
                  Need Help Navigating or Have a Public Inquiry?
                </h3>
                <p className="text-sm text-slate-300 mt-1">
                  Connect with the Madhesh Legal Youth Club team in Birgunj, Nepal.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onNavigate('contact')}
                  className="btn-interactive px-5 py-2.5 rounded-lg bg-[#D4A72C] hover:bg-[#c29624] text-[#0B1F3A] font-bold text-sm transition-colors cursor-pointer shadow-xs"
                >
                  Contact Us
                </button>
                <a
                  href={`tel:${ORGANIZATION_CONFIG.phone}`}
                  className="btn-interactive inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-colors cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#D4A72C]" />
                  <span>{ORGANIZATION_CONFIG.phone}</span>
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
