'use client';

import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { personalInfo } from '../../data/portfolioData';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Instagram,
  MessageSquare,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{
    type: 'success' | 'error';
    text: string;
  } | null>(null);

  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatusMessage({
        type: 'error',
        text: 'Please fill in all form fields.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    // Simulate EmailJS or serverless form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setStatusMessage({
        type: 'success',
        text: 'Thank you! Your message has been sent successfully. I will get back to you within 24 hours.',
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 relative bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badgeText="Get In Touch"
          title="Let's Build Something Great Together"
          subtitle="Open for full-time junior software engineer positions, front-end roles, and project collaborations."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto mt-8">
          
          {/* Left Column (5 cols): Direct Contact Cards & Socials */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-slate-100 mb-2">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
                  Feel free to reach out directly via email, WhatsApp, or connect on social media channels.
                </p>

                {/* Info List */}
                <div className="flex flex-col gap-6">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        Email Address
                      </span>
                      <div className="flex items-center gap-2 mt-0.5">
                        <a
                          href={`mailto:${personalInfo.email}`}
                          className="text-sm font-semibold text-slate-200 hover:text-blue-400 transition-colors"
                        >
                          {personalInfo.email}
                        </a>
                        <button
                          onClick={handleCopyEmail}
                          className="p-1 text-slate-400 hover:text-white transition-colors"
                          title="Copy Email"
                        >
                          {copiedEmail ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        WhatsApp / Phone
                      </span>
                      <p className="text-sm font-semibold text-slate-200 mt-0.5">
                        <a
                          href={personalInfo.whatsapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-emerald-400 transition-colors"
                        >
                          {personalInfo.phone}
                        </a>
                      </p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                        Location
                      </span>
                      <p className="text-sm font-semibold text-slate-200 mt-0.5">
                        {personalInfo.location}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-8 border-t border-slate-800/80 mt-8">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-4">
                  Find me online:
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-slate-700 flex items-center justify-center gap-2 text-xs font-semibold transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-blue-400 hover:border-slate-700 flex items-center justify-center gap-2 text-xs font-semibold transition-all"
                  >
                    <Linkedin className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-pink-400 hover:border-slate-700 flex items-center justify-center gap-2 text-xs font-semibold transition-all"
                  >
                    <Instagram className="w-4 h-4" />
                    <span>Instagram</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (7 cols): Interactive Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 rounded-3xl border border-slate-800 flex flex-col gap-6"
            >
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-blue-400" />
                <span>Send a Message</span>
              </h3>

              {statusMessage && (
                <div
                  className={`p-4 rounded-xl text-xs font-semibold flex items-center gap-2 ${
                    statusMessage.type === 'success'
                      ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                      : 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                  }`}
                >
                  {statusMessage.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  )}
                  <span>{statusMessage.text}</span>
                </div>
              )}

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Your Full Name <span className="text-blue-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Your Email Address <span className="text-blue-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sarah@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Message / Job Opportunity Details <span className="text-blue-400">*</span>
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="Tell me about your team, role expectations, or project specs..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-100 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600 resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message Now</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};
