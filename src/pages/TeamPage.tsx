import React from 'react';
import { PageId } from '../types';
import { PageHero } from '../components/PageHero';
import { LEADERSHIP_MEMBERS } from '../data/organizationData';
import { Users, User, Shield, HeartHandshake } from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface TeamPageProps {
  onNavigate: (page: PageId) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full">
      {/* Reusable Page Hero */}
      <PageHero
        title="Meet Our Team"
        subtitle="Youth-led. Community-focused. Justice-driven."
        currentPageTitle="Our Team"
        onNavigateHome={() => onNavigate('home')}
      />

      {/* Leadership Section */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-[#174A7E] bg-[#F6F8FB] rounded-md mb-3">
                Governance
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A]">
                Executive Leadership
              </h2>
              <p className="mt-2 text-slate-600 text-sm sm:text-base">
                The founding leadership guiding the legal awareness agenda and community initiatives of Madhesh Legal Youth Club.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LEADERSHIP_MEMBERS.map((member, index) => (
              <ScrollReveal key={member.id} delay={index * 100}>
                <div
                  className="card-hover-lift bg-[#F6F8FB] rounded-2xl border border-slate-200/80 overflow-hidden shadow-xs flex flex-col justify-between group h-full"
                >
                  {/* Photo or Placeholder area */}
                  <div className="aspect-4/3 sm:aspect-square bg-slate-200 relative flex items-center justify-center overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover image-zoom-subtle"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-b from-slate-100 to-slate-200 flex flex-col items-center justify-center text-slate-400 p-6 text-center">
                        <div className="w-20 h-20 rounded-full bg-white shadow-2xs border border-slate-200 flex items-center justify-center text-[#174A7E] mb-3">
                          <User className="w-10 h-10 stroke-[1.5]" />
                        </div>
                        <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold">
                          Profile Image Placeholder
                        </span>
                      </div>
                    )}

                    {/* Position Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0B1F3A] text-[#D4A72C] shadow-sm">
                        {member.role}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                    <div>
                      <h3 className="text-xl font-bold text-[#0B1F3A]">
                        {member.name}
                      </h3>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#174A7E] mt-0.5 mb-3">
                        {member.role} • Madhesh Legal Youth Club
                      </p>
                      {member.bio && (
                        <p className="text-sm text-slate-600 leading-relaxed">
                          {member.bio}
                        </p>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <span className="flex items-center gap-1.5 font-medium">
                        <Shield className="w-4 h-4 text-[#D4A72C]" />
                        <span>Founding Leadership</span>
                      </span>
                      <span>Birgunj, Nepal</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Members Section */}
      <section className="py-16 sm:py-24 bg-[#F6F8FB] border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Col - Team Collective Photo */}
              <div className="lg:col-span-7">
                <div className="group relative rounded-2xl overflow-hidden shadow-sm border border-slate-200">
                  <img
                    src="/images/members/members-team.jpeg"
                    alt="Madhesh Legal Youth Club 20 Members representation"
                    referrerPolicy="no-referrer"
                    className="w-full aspect-16/10 object-cover image-zoom-subtle"
                  />
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-xs py-2 px-4 rounded-xl shadow-xs border border-slate-100">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#D4A72C]" />
                      <span className="text-xs font-bold text-[#0B1F3A]">
                        20 Active Club Members
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Col - Members Info */}
              <div className="lg:col-span-5 space-y-6">
                <div className="inline-block px-3 py-1 text-xs font-bold tracking-wider uppercase text-[#174A7E] bg-white rounded-md border border-slate-200">
                  Youth Membership
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0B1F3A]">
                  Our Members
                </h2>
                <div className="flex items-baseline gap-3">
                  <span className="text-5xl sm:text-6xl font-extrabold text-[#0B1F3A]">20</span>
                  <span className="text-xs sm:text-sm font-bold text-[#174A7E] uppercase tracking-wider">
                    Total Active Members
                  </span>
                </div>
                <p className="text-base text-slate-600 leading-relaxed">
                  Our organization is powered by a dedicated team of 20 young individuals, law students, and community volunteers working collaboratively on the ground in Birgunj and surrounding districts.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-[#174A7E]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#174A7E]">
                      ✓
                    </div>
                    <span>Conducting community awareness dialogues and surveys</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-[#174A7E]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#174A7E]">
                      ✓
                    </div>
                    <span>Organizing youth peer-learning legal discussion groups</span>
                  </div>
                  <div className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="w-5 h-5 rounded-full bg-[#174A7E]/10 flex items-center justify-center shrink-0 mt-0.5 text-[#174A7E]">
                      ✓
                    </div>
                    <span>Facilitating civic literacy materials for public distribution</span>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => onNavigate('contact')}
                    className="btn-interactive inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-[#0B1F3A] hover:bg-[#174A7E] rounded-lg cursor-pointer shadow-xs"
                  >
                    <HeartHandshake className="w-4 h-4 text-[#D4A72C]" />
                    <span>Join Our Youth Club</span>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
