import React, { useState } from 'react';
import { PageId } from '../types';
import { PageHero } from '../components/PageHero';
import {
  LEGAL_TOPICS,
  LEGAL_FAQS,
  ORGANIZATION_CONFIG,
} from '../data/organizationData';
import {
  AlertCircle,
  ChevronDown,
  ChevronUp,
  HelpCircle,
  CheckCircle,
  Search,
  BookOpen,
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface LegalAwarenessPageProps {
  onNavigate: (page: PageId) => void;
}

export const LegalAwarenessPage: React.FC<LegalAwarenessPageProps> = ({
  onNavigate,
}) => {
  const [expandedTopicId, setExpandedTopicId] = useState<string | null>(
    'know-your-rights'
  );
  const [expandedFaqIdx, setExpandedFaqIdx] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleTopic = (id: string) => {
    setExpandedTopicId(expandedTopicId === id ? null : id);
  };

  const toggleFaq = (idx: number) => {
    setExpandedFaqIdx(expandedFaqIdx === idx ? null : idx);
  };

  const filteredTopics = LEGAL_TOPICS.filter(
    (t) =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Reusable Page Hero */}
      <PageHero
        title="Legal Awareness"
        subtitle="Understanding your rights is the first step toward protecting them."
        currentPageTitle="Legal Awareness"
        onNavigateHome={() => onNavigate('home')}
      />

      {/* Mandatory Official Disclaimer Banner */}
      <section className="bg-amber-50/70 border-b border-amber-200/80 py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
            <span className="font-bold text-amber-950">Important Notice: </span>
            {ORGANIZATION_CONFIG.disclaimer}
          </div>
        </div>
      </section>

      {/* Educational Modules Section */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10">
              <div>
                <div className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-[#174A7E] bg-[#F6F8FB] rounded-md mb-2">
                  Educational Categories
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A]">
                  Foundations of Legal Literacy
                </h2>
              </div>

              {/* Search Input */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search civic topics..."
                  className="w-full pl-10 pr-4 py-2 text-sm border border-slate-200 rounded-lg bg-[#F6F8FB] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] transition-colors"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Topics Accordion List */}
          <div className="space-y-4">
            {filteredTopics.map((topic, index) => {
              const isExpanded = expandedTopicId === topic.id;
              return (
                <ScrollReveal key={topic.id} delay={index * 50}>
                  <div
                    className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                      isExpanded
                        ? 'border-[#0B1F3A]/30 bg-white shadow-xs'
                        : 'border-slate-200 bg-[#F6F8FB] hover:border-slate-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleTopic(topic.id)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors hover:bg-slate-50/50"
                      aria-expanded={isExpanded}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                            isExpanded
                              ? 'bg-[#0B1F3A] text-[#D4A72C]'
                              : 'bg-white text-[#174A7E] border border-slate-200'
                          }`}
                        >
                          <BookOpen className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-[#174A7E]">
                              {topic.category}
                            </span>
                          </div>
                          <h3 className="text-lg font-bold text-[#0B1F3A]">
                            {topic.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-500 mt-0.5 line-clamp-1">
                            {topic.summary}
                          </p>
                        </div>
                      </div>
                      <div className="shrink-0 p-2 text-slate-500 transition-transform duration-200">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-[#0B1F3A]" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-6 sm:px-6 sm:pb-8 pt-2 border-t border-slate-100 bg-white animate-in fade-in duration-200">
                        <p className="text-sm text-slate-700 leading-relaxed max-w-3xl mb-6">
                          {topic.description}
                        </p>

                        <div className="bg-[#F6F8FB] p-5 sm:p-6 rounded-xl border border-slate-200/80">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] mb-3">
                            Key Civic Principles &amp; Guidance:
                          </h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {topic.keyPoints.map((point, idx) => (
                              <div
                                key={idx}
                                className="flex items-start gap-2 text-xs sm:text-sm text-slate-700"
                              >
                                <CheckCircle className="w-4 h-4 text-[#174A7E] shrink-0 mt-0.5" />
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                          <span>Framework ready for verified educational updates</span>
                          <span className="text-[#174A7E] font-medium">Educational Resource</span>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}

            {filteredTopics.length === 0 && (
              <div className="p-8 text-center bg-slate-50 rounded-xl border border-slate-200 text-slate-500 text-sm">
                No matching topics found for "{searchQuery}".
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-16 sm:py-24 bg-[#F6F8FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold tracking-wider uppercase text-[#174A7E] bg-white rounded-md mb-3 border border-slate-200">
                <HelpCircle className="w-3.5 h-3.5 text-[#D4A72C]" />
                <span>Clarifications</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A]">
                Frequently Asked Questions
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Clear answers regarding the scope, mission, and activities of Madhesh Legal Youth Club.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-4">
            {LEGAL_FAQS.map((faq, idx) => {
              const isExpanded = expandedFaqIdx === idx;
              return (
                <ScrollReveal key={idx} delay={idx * 60}>
                  <div
                    className="card-hover-lift bg-white rounded-xl border border-slate-200 shadow-2xs overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none transition-colors hover:bg-slate-50/50"
                      aria-expanded={isExpanded}
                    >
                      <span className="font-semibold text-base text-[#0B1F3A]">
                        {faq.question}
                      </span>
                      <span className="shrink-0 p-1 text-slate-500 transition-transform duration-200">
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-[#0B1F3A]" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </span>
                    </button>

                    {isExpanded && (
                      <div className="px-5 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal delay={120}>
            <div className="mt-12 text-center p-6 bg-white rounded-xl border border-slate-200 card-hover-lift">
              <p className="text-sm text-slate-700 font-medium">
                Have another question about our legal awareness sessions or upcoming programs?
              </p>
              <button
                onClick={() => onNavigate('contact')}
                className="btn-interactive mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#174A7E] hover:text-[#0B1F3A] cursor-pointer"
              >
                <span>Contact Our Team</span>
                <span>→</span>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
