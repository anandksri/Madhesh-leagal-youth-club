import React from 'react';
import { PageId } from '../types';
import { PageHero } from '../components/PageHero';
import {
  ORGANIZATION_CONFIG,
  OBJECTIVES,
} from '../data/organizationData';
import {
  Eye,
  Target,
  Users,
  Compass,
  MapPin,
  Building2,
  ArrowRight,
  Shield,
  Scale,
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Reusable Page Hero */}
      <PageHero
        title="About Madhesh Legal Youth Club"
        subtitle="Working toward a legally aware and empowered society."
        currentPageTitle="About Us"
        onNavigateHome={() => onNavigate('home')}
      />

      {/* 1. Who We Are */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-[#174A7E] bg-[#F6F8FB] rounded-md">
                  Identity &amp; Foundation
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A]">
                  Who We Are
                </h2>
                <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed">
                  Madhesh Legal Youth Club is a non-profit organization based in Birgunj, Nepal, working to promote legal awareness and help people understand their rights and responsibilities.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Although the organization is based in Birgunj, its jurisdiction and mission are not limited to Madhesh Province. The organization aims to work across Nepal.
                </p>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Founded by passionate young legal advocates and community organizers, our club is united by the belief that justice and civic equality cannot be achieved without widespread public awareness of the law.
                </p>
              </div>

              <div className="lg:col-span-5">
                <div className="group rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                  <img
                    src="/images/youth_workshop.jpg"
                    alt="Madhesh Legal Youth Club session"
                    referrerPolicy="no-referrer"
                    className="w-full aspect-4/3 object-cover image-zoom-subtle"
                  />
                  <div className="p-4 bg-[#F6F8FB] border-t border-slate-200">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#0B1F3A]">
                      <MapPin className="w-4 h-4 text-[#D4A72C] shrink-0" />
                      <span>Headquarters: Birgunj, Nepal • Working Nationwide</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* NEW SECTION: Why Legal Awareness Matters */}
      <section className="py-16 sm:py-24 bg-[#F6F8FB] border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 lg:p-16 shadow-2xs">
              {/* Context Heading */}
              <div className="mb-10 text-center lg:text-left">
                <div className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-[#174A7E] bg-[#F6F8FB] rounded-md mb-2">
                  Core Perspective
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A]">
                  Why Legal Awareness Matters
                </h2>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                {/* LEFT SIDE: prominent legal/civic logo or icon */}
                <div className="lg:col-span-5 flex flex-col items-center justify-center">
                  <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border border-slate-200 shadow-sm transition-transform duration-300 hover:scale-[1.02] bg-[#0B1F3A]">
                    <img
                      src="/images/madheshclub-logo.jpeg"
                      alt="Legal awareness workshop and civic engagement"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A]/60 via-[#0B1F3A]/10 to-transparent" />
                  </div>
                  <div className="mt-4 text-center">
                    <span className="text-xs font-bold tracking-widest uppercase text-[#0B1F3A]">
                      Madhesh Legal Youth Club
                    </span>
                    <span className="text-[11px] text-slate-500 block">
                      Equality • Rights • Awareness
                    </span>
                  </div>
                </div>

                {/* RIGHT SIDE: Content */}
                <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
                  {/* Small eyebrow text */}
                  <div>
                    <span className="text-xs font-bold tracking-widest uppercase text-[#D4A72C] bg-[#0B1F3A] px-3 py-1 rounded-md inline-block">
                      OUR PURPOSE
                    </span>
                  </div>

                  {/* Heading */}
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A] leading-tight">
                    Knowledge of the Law Empowers People
                  </h3>

                  {/* Short paragraph */}
                  <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                    Legal awareness helps people understand their rights, responsibilities and the steps they can take when those rights are challenged.
                  </p>

                  {/* Three small points */}
                  <div className="pt-2 space-y-4">
                    {/* Point 1 */}
                    <div className="card-hover-lift flex items-start gap-4 p-4 rounded-xl bg-[#F6F8FB] border border-slate-200/80 hover:bg-slate-50">
                      <span className="text-sm font-extrabold text-[#D4A72C] tracking-wider shrink-0 mt-0.5">
                        01
                      </span>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-[#0B1F3A]">
                          Know Your Rights
                        </h4>
                        <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                          Understand the rights and protections available to you.
                        </p>
                      </div>
                    </div>

                    {/* Point 2 */}
                    <div className="card-hover-lift flex items-start gap-4 p-4 rounded-xl bg-[#F6F8FB] border border-slate-200/80 hover:bg-slate-50">
                      <span className="text-sm font-extrabold text-[#D4A72C] tracking-wider shrink-0 mt-0.5">
                        02
                      </span>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-[#0B1F3A]">
                          Know Your Duties
                        </h4>
                        <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                          Build awareness of the responsibilities we share as members of society.
                        </p>
                      </div>
                    </div>

                    {/* Point 3 */}
                    <div className="card-hover-lift flex items-start gap-4 p-4 rounded-xl bg-[#F6F8FB] border border-slate-200/80 hover:bg-slate-50">
                      <span className="text-sm font-extrabold text-[#D4A72C] tracking-wider shrink-0 mt-0.5">
                        03
                      </span>
                      <div>
                        <h4 className="text-base sm:text-lg font-bold text-[#0B1F3A]">
                          Speak Up
                        </h4>
                        <p className="text-sm text-slate-600 mt-0.5 leading-relaxed">
                          Encourage people to question injustice and seek appropriate support.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. Vision & Mission Cards */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <ScrollReveal delay={0}>
              <div className="card-hover-lift bg-[#F6F8FB] p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] flex items-center justify-center text-[#D4A72C] mb-6">
                    <Eye className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#174A7E] mb-2">
                    Our Vision
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
                    A Legally Aware Society
                  </h3>
                  <blockquote className="text-base sm:text-lg text-slate-700 leading-relaxed italic border-l-4 border-[#D4A72C] pl-4">
                    “{ORGANIZATION_CONFIG.vision}”
                  </blockquote>
                </div>
              </div>
            </ScrollReveal>

            {/* Mission */}
            <ScrollReveal delay={100}>
              <div className="card-hover-lift bg-[#F6F8FB] p-8 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#174A7E] flex items-center justify-center text-[#D4A72C] mb-6">
                    <Target className="w-6 h-6" />
                  </div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#174A7E] mb-2">
                    Our Mission
                  </div>
                  <h3 className="text-xl font-bold text-[#0B1F3A] mb-3">
                    Practical Empowerment
                  </h3>
                  <blockquote className="text-base sm:text-lg text-slate-700 leading-relaxed italic border-l-4 border-[#D4A72C] pl-4">
                    “{ORGANIZATION_CONFIG.mission}”
                  </blockquote>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Our Objectives */}
      <section className="py-16 sm:py-24 bg-[#F6F8FB] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-[#174A7E] bg-white rounded-md mb-3 border border-slate-200">
                Core Direction
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A]">
                Our Objectives
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                Dedicated to delivering structured civic education and removing barriers to legal understanding.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OBJECTIVES.map((objective, idx) => (
              <ScrollReveal key={idx} delay={idx * 70}>
                <div className="card-hover-lift bg-white p-6 rounded-xl border border-slate-200/80 hover:border-slate-300 flex items-start gap-4 shadow-2xs h-full">
                  <div className="w-8 h-8 rounded-full bg-[#F6F8FB] border border-slate-200 flex items-center justify-center shrink-0 text-[#174A7E] font-bold text-sm">
                    {idx + 1}
                  </div>
                  <div className="text-sm font-semibold text-slate-800 leading-snug">
                    {objective}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Timeline & Organization Story */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <div className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-[#174A7E] bg-[#F6F8FB] rounded-md mb-3">
                Roots &amp; Roadmap
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A]">
                Organization Story
              </h2>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {/* Step 1: Founders */}
            <ScrollReveal delay={0}>
              <div className="card-hover-lift bg-[#F6F8FB] p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="w-12 h-12 rounded-lg bg-[#0B1F3A] flex items-center justify-center text-[#D4A72C] shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#174A7E]">
                    Founding Initiative
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1F3A] mt-0.5">
                    Founded by Shrawan Patel &amp; Anil Kr. Patel
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Established by youth leaders committed to social justice, legal awareness, and public service.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 2: Leadership */}
            <ScrollReveal delay={80}>
              <div className="card-hover-lift bg-[#F6F8FB] p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="w-12 h-12 rounded-lg bg-[#174A7E] flex items-center justify-center text-[#D4A72C] shrink-0">
                  <Compass className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#174A7E]">
                    Executive Leadership
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1F3A] mt-0.5">
                    Democratic Governance
                  </h3>
                  <div className="text-sm text-slate-700 mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div className="p-3 bg-white border border-slate-200/80 rounded-lg">
                      <span className="text-xs text-slate-400 block font-semibold">President</span>
                      <span className="font-bold text-[#0B1F3A]">Shrawan Patel</span>
                    </div>
                    <div className="p-3 bg-white border border-slate-200/80 rounded-lg">
                      <span className="text-xs text-slate-400 block font-semibold">Vice President</span>
                      <span className="font-bold text-[#0B1F3A]">Sanjana Shukla</span>
                    </div>
                    <div className="p-3 bg-white border border-slate-200/80 rounded-lg">
                      <span className="text-xs text-slate-400 block font-semibold">Secretary</span>
                      <span className="font-bold text-[#0B1F3A]">Anil Kr. Patel</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 3: Location */}
            <ScrollReveal delay={160}>
              <div className="card-hover-lift bg-[#F6F8FB] p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="w-12 h-12 rounded-lg bg-[#0B1F3A] flex items-center justify-center text-[#D4A72C] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#174A7E]">
                    Base of Operations
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1F3A] mt-0.5">
                    Birgunj, Nepal
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    Headquartered in the vibrant commercial and cultural hub of Birgunj, coordinating grassroots community dialogues.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* Step 4: Future Vision */}
            <ScrollReveal delay={240}>
              <div className="card-hover-lift bg-[#F6F8FB] p-6 sm:p-8 rounded-xl border border-slate-200 shadow-2xs flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                <div className="w-12 h-12 rounded-lg bg-[#174A7E] flex items-center justify-center text-[#D4A72C] shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#174A7E]">
                    Future Expansion
                  </span>
                  <h3 className="text-lg font-bold text-[#0B1F3A] mt-0.5">
                    Branches Across Nepal
                  </h3>
                  <p className="text-sm text-slate-600 mt-1 leading-relaxed">
                    The organization plans to expand through branches in other parts of Nepal, connecting youth networks nationwide.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => onNavigate('team')}
              className="btn-interactive inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#174A7E] rounded-lg cursor-pointer shadow-xs"
            >
              <span>Meet Our Team</span>
              <ArrowRight className="w-4 h-4 text-[#D4A72C]" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
