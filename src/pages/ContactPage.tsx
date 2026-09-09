import React, { useState } from 'react';
import { PageId } from '../types';
import { PageHero } from '../components/PageHero';
import { ORGANIZATION_CONFIG } from '../data/organizationData';
import {
  Phone,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  ExternalLink,
  Shield,
} from 'lucide-react';
import { ScrollReveal } from '../components/ScrollReveal';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<FormState>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message content is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate brief client-side handling
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
    setSubmitted(false);
    setErrors({});
  };

  return (
    <div className="w-full">
      {/* Reusable Page Hero */}
      <PageHero
        title="Get in Touch"
        subtitle="Have a question, want to collaborate, or want to learn more about our work? Reach out to us."
        currentPageTitle="Contact Us"
        onNavigateHome={() => onNavigate('home')}
      />

      {/* Contact Cards Section */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Phone Card */}
            <ScrollReveal delay={0}>
              <div className="card-hover-lift bg-[#F6F8FB] p-8 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#D4A72C] flex items-center justify-center mb-5">
                    <Phone className="w-6 h-6" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#174A7E]">
                    Phone
                  </h3>
                  <p className="text-xl font-bold text-[#0B1F3A] mt-1">
                    {ORGANIZATION_CONFIG.phone}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    Direct line for inquiries, questions, and youth engagement.
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href={`tel:${ORGANIZATION_CONFIG.phone}`}
                    className="btn-interactive w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white border border-slate-300 hover:border-[#0B1F3A] text-sm font-semibold text-[#0B1F3A] transition-colors cursor-pointer"
                  >
                    <Phone className="w-4 h-4 text-[#D4A72C]" />
                    <span>Call Us</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Email Card */}
            <ScrollReveal delay={100}>
              <div className="card-hover-lift bg-[#F6F8FB] p-8 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#174A7E] text-[#D4A72C] flex items-center justify-center mb-5">
                    <Mail className="w-6 h-6" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#174A7E]">
                    Email
                  </h3>
                  <p className="text-base font-bold text-[#0B1F3A] mt-1 break-all">
                    {ORGANIZATION_CONFIG.email}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    Official correspondence, partnerships, and program inquiries.
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href={`mailto:${ORGANIZATION_CONFIG.email}`}
                    className="btn-interactive w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white border border-slate-300 hover:border-[#0B1F3A] text-sm font-semibold text-[#0B1F3A] transition-colors cursor-pointer"
                  >
                    <Mail className="w-4 h-4 text-[#D4A72C]" />
                    <span>Email Us</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Location Card */}
            <ScrollReveal delay={200}>
              <div className="card-hover-lift bg-[#F6F8FB] p-8 rounded-2xl border border-slate-200 shadow-2xs flex flex-col justify-between h-full">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#D4A72C] flex items-center justify-center mb-5">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-[#174A7E]">
                    Location
                  </h3>
                  <p className="text-xl font-bold text-[#0B1F3A] mt-1">
                    {ORGANIZATION_CONFIG.location}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 leading-relaxed">
                    Madhesh Province, Nepal • Serving communities across Nepal.
                  </p>
                </div>
                <div className="mt-6">
                  <a
                    href={ORGANIZATION_CONFIG.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-white border border-slate-300 hover:border-[#0B1F3A] text-sm font-semibold text-[#0B1F3A] transition-colors cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4 text-[#D4A72C]" />
                    <span>Open Location</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Form & Information Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <ScrollReveal>
                <div className="bg-[#F6F8FB] p-8 sm:p-10 rounded-2xl border border-slate-200">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-[#0B1F3A]">
                      Send Us a Message
                    </h3>
                    <p className="text-sm text-slate-500 mt-1">
                      Fill out the form below and our team will get in touch.
                    </p>
                  </div>

                  {submitted ? (
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6 text-emerald-900 space-y-3 animate-in fade-in duration-300">
                      <div className="flex items-center gap-2 font-bold text-emerald-950 text-base">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                        <span>Inquiry Recorded Successfully</span>
                      </div>
                      <p className="text-sm text-emerald-800 leading-relaxed">
                        Thank you, <strong className="font-semibold">{formData.name}</strong>. Your message regarding "{formData.subject}" has been received in our inquiry log.
                      </p>
                      <p className="text-xs text-emerald-700">
                        For immediate inquiries, feel free to call our club directly at{' '}
                        <a href={`tel:${ORGANIZATION_CONFIG.phone}`} className="underline font-bold">
                          {ORGANIZATION_CONFIG.phone}
                        </a>
                        .
                      </p>
                      <button
                        onClick={handleReset}
                        className="btn-interactive mt-4 px-4 py-2 bg-white border border-emerald-300 text-xs font-semibold text-emerald-900 rounded-lg hover:bg-emerald-100 transition-colors cursor-pointer"
                      >
                        Send Another Message
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Name */}
                        <div>
                          <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Full Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="e.g. Ramesh Sharma"
                            className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 transition-colors ${
                              errors.name ? 'border-red-400 focus:ring-red-300' : 'border-slate-300 focus:ring-[#0B1F3A]'
                            }`}
                          />
                          {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                        </div>

                        {/* Email */}
                        <div>
                          <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Email Address <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="e.g. citizen@example.com"
                            className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 transition-colors ${
                              errors.email ? 'border-red-400 focus:ring-red-300' : 'border-slate-300 focus:ring-[#0B1F3A]'
                            }`}
                          />
                          {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Phone */}
                        <div>
                          <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Phone Number (Optional)
                          </label>
                          <input
                            id="contact-phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="e.g. 98XXXXXXXX"
                            className="w-full px-4 py-2.5 bg-white border border-slate-300 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#0B1F3A] transition-colors"
                          />
                        </div>

                        {/* Subject */}
                        <div>
                          <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                            Subject <span className="text-red-500">*</span>
                          </label>
                          <input
                            id="contact-subject"
                            type="text"
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            placeholder="e.g. Legal awareness workshop inquiry"
                            className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 transition-colors ${
                              errors.subject ? 'border-red-400 focus:ring-red-300' : 'border-slate-300 focus:ring-[#0B1F3A]'
                            }`}
                          />
                          {errors.subject && <p className="text-xs text-red-500 mt-1">{errors.subject}</p>}
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="Write your message, question, or collaboration interest here..."
                          className={`w-full px-4 py-2.5 bg-white border rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 transition-colors ${
                            errors.message ? 'border-red-400 focus:ring-red-300' : 'border-slate-300 focus:ring-[#0B1F3A]'
                          }`}
                        />
                        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="btn-interactive w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0B1F3A] hover:bg-[#174A7E] text-white text-sm font-semibold rounded-lg transition-colors cursor-pointer shadow-xs disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <span>Processing...</span>
                          ) : (
                            <>
                              <Send className="w-4 h-4 text-[#D4A72C]" />
                              <span>Send Message</span>
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </ScrollReveal>
            </div>

            {/* Additional details column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <ScrollReveal delay={150}>
                <div className="card-hover-lift bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#F6F8FB] flex items-center justify-center text-[#174A7E]">
                      <Shield className="w-5 h-5 text-[#D4A72C]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-base text-[#0B1F3A]">Civic Non-Profit Organization</h4>
                      <p className="text-xs text-slate-500">Committed to Community Awareness</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Madhesh Legal Youth Club coordinates educational campaigns, answers public inquiries regarding civic literacy, and welcomes interested youth to join as volunteers.
                  </p>
                  <div className="pt-3 border-t border-slate-100 text-xs sm:text-sm text-slate-600 space-y-2.5">
                    <div className="flex items-start gap-2">
                      <span className="font-semibold text-slate-800 shrink-0">Office Location:</span>
                      <span>Birgunj, Parsa, Madhesh Province, Nepal</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-800">President:</span>
                      <span>Shrawan Patel</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-slate-800">Secretary:</span>
                      <span>Anil Kr. Patel</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-14 sm:py-16 bg-[#F6F8FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#0B1F3A]">
                Location &amp; Operations
              </h3>
              <p className="text-sm text-slate-600 mt-1">
                Birgunj, Nepal • Hub of our legal literacy initiatives
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="card-hover-lift bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-xs max-w-4xl mx-auto">
              {/* Map visual placeholder */}
              <div className="relative aspect-21/9 min-h-[260px] bg-slate-100 flex flex-col items-center justify-center p-6 text-center">
                {/* Stylized map grid background */}
                <div
                  className="absolute inset-0 opacity-15"
                  style={{
                    backgroundImage: `linear-gradient(#0B1F3A 1px, transparent 1px), linear-gradient(90deg, #0B1F3A 1px, transparent 1px)`,
                    backgroundSize: '32px 32px',
                  }}
                />
                <div className="relative z-10 flex flex-col items-center max-w-md">
                  <div className="w-12 h-12 rounded-full bg-[#0B1F3A] text-[#D4A72C] flex items-center justify-center mb-3 shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold text-[#0B1F3A]">
                    Birgunj, Nepal
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1 mb-5">
                    Parsa District, Madhesh Province • Operating across Nepal
                  </p>
                  <a
                    href={ORGANIZATION_CONFIG.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-interactive inline-flex items-center gap-2 px-6 py-2.5 bg-[#0B1F3A] hover:bg-[#174A7E] text-white text-sm font-semibold rounded-lg transition-colors shadow-xs cursor-pointer"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-4 h-4 text-[#D4A72C]" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};
