'use client';

import { useState } from 'react';
import { PortalFrame, SectionHeading } from '@/components/portal-shell';

interface TemplateOption {
  category: string;
  emailSubject: string;
  placeholderText: string;
}

const templates: TemplateOption[] = [
  {
    category: 'General Inquiry',
    emailSubject: 'General Inquiry for Zabibu Technika',
    placeholderText: 'Share your questions, ideas, or feedback regarding Zabibu Technika...',
  },
  {
    category: 'Community & Developer',
    emailSubject: 'Community / Developer Outreach',
    placeholderText: 'Inquiring about open node builds, alpha testing, Zabibu OS prototypes, or community collaboration...',
  },
  {
    category: 'Press & Media',
    emailSubject: 'Press / Media Inquiry: Zabibu Technika & Grape Tech',
    placeholderText: 'Outline your publication, coverage topic, interview requests, or feature inquiries...',
  },
  {
    category: 'Partnerships & Licensing',
    emailSubject: 'Strategic Partnership / IP Licensing Inquiry',
    placeholderText: 'Details regarding hardware integration, commercial licensing for LISP / Virosauda IP, or co-development...',
  },
  {
    category: 'Support & Bug Reports',
    emailSubject: 'Technical Support / Systems Feedback',
    placeholderText: 'Describe system behavior, node environment, or platform issues encountered...',
  },
];

const socialLinks = [
  {
    name: 'Instagram',
    handle: '@zabibutechnika',
    url: 'https://instagram.com/zabibutechnika',
  },
  {
    name: 'LinkedIn',
    handle: 'zabibutechnika',
    url: 'https://linkedin.com/company/zabibutechnika',
  },
  {
    name: 'YouTube',
    handle: 'Zabibu Technika',
    url: 'https://youtube.com/@zabibutechnika',
  },
  {
    name: 'X (Twitter)',
    handle: '@zabibutechnika',
    url: 'https://x.com/zabibutechnika',
  },
  {
    name: 'WhatsApp Channel',
    handle: 'Zabibu Community Node',
    url: 'https://whatsapp.com/channel/0029VbC0Nnj5a248TWBGLk2s',
  },
];

const pressReferences = [
  {
    title: 'Zabibu OS: A Grape-Sized Dream With Giant Ambitions',
    source: 'Medium — By Tehillah Mwangada Kachila',
    link: 'https://zabibutechnika.medium.com/zabibuos-a-grape-sized-dream-with-giant-ambitions-eea8a541bd72',
    date: 'Official Essay',
  },
  {
    title: 'Zabibu Fikra Model 1 - 2B Open Intelligence Weights',
    source: 'Hugging Face Repository',
    link: 'https://huggingface.co/zabibutechnika/Zabibu-Fikra-2B',
    date: 'Model Artifact',
  },
  {
    title: 'Grape Technologies to Zabibu Technika Archive',
    source: 'Legacy Platform Archive',
    link: 'https://zabibu.carrd.co',
    date: 'Foundational Site',
  },
];

export default function Contact() {
  const [selectedCategory, setSelectedCategory] = useState(templates[0].category);
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [subject, setSubject] = useState(templates[0].emailSubject);
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleCategoryChange = (cat: string) => {
    setSelectedCategory(cat);
    const matched = templates.find((t) => t.category === cat);
    if (matched) {
      setSubject(matched.emailSubject);
    }
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formsubmit.co/ajax/zabibutechnika@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: `[Contact Form: ${selectedCategory}] ${subject}`,
          Category: selectedCategory,
          Name: senderName,
          Email: senderEmail,
          Subject: subject,
          Message: message,
          Source: 'Zabibu Technika Web Portal (/contact)',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Dispatch failed. Please email zabibutechnika@gmail.com directly.');
      }
    } catch {
      alert('Network issue. Please reach out to zabibutechnika@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const currentTemplate = templates.find((t) => t.category === selectedCategory) || templates[0];

  return (
    <PortalFrame>
      <SectionHeading
        eyebrow="Direct Node & Network Outreach"
        title={
          <>
            Connect with the
            <br />
            <span className="text-gradient">Zabibu Technika team.</span>
          </>
        }
        copy="Reach out to founder Tehillah Mwangada Kachila and the engineering team for press, community access, technical partnerships, or general queries."
      />

      <div className="my-12 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Dynamic Mailing Form */}
        <div className="lg:col-span-7 portal p-8 md:p-10 border border-white/10 bg-[#09090e]">
          <span className="tag">DIRECT TRANSMISSION</span>
          <h3 className="text-xl font-bold text-white mt-4">Send a Message</h3>
          <p className="text-xs text-muted-foreground mt-1">
            Submissions send directly to <span className="text-white">zabibutechnika@gmail.com</span>.
          </p>

          {submitted ? (
            <div className="my-8 p-6 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center">
              <p className="text-base font-bold text-amber-400">Transmission Delivered</p>
              <p className="text-xs text-zinc-300 mt-2">
                Thank you, {senderName}. Your message regarding <span className="font-semibold text-white">{selectedCategory}</span> has been dispatched directly to executive inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-mono uppercase text-muted-foreground">Inquiry Category</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  className="w-full mt-2 p-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:border-amber-500 focus:outline-none"
                >
                  {templates.map((t) => (
                    <option key={t.category} value={t.category}>
                      {t.category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase text-muted-foreground">Your Name</label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Full Name / Handle"
                    className="w-full mt-2 p-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:border-amber-500 focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-muted-foreground">Direct Email</label>
                  <input
                    type="email"
                    value={senderEmail}
                    onChange={(e) => setSenderEmail(e.target.value)}
                    placeholder="yourname@domain.com"
                    className="w-full mt-2 p-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:border-amber-500 focus:outline-none"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-muted-foreground">Subject Line</label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full mt-2 p-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:border-amber-500 focus:outline-none"
                  required
                />
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-muted-foreground">Message</label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={currentTemplate.placeholderText}
                  className="w-full mt-2 p-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:border-amber-500 focus:outline-none"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="glow-button w-full py-3.5 text-xs font-bold uppercase tracking-wider mt-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Transmitting Message...' : 'Send Transmission ↗'}
              </button>
            </form>
          )}
        </div>

        {/* Social, WhatsApp & References */}
        <div className="lg:col-span-5 space-y-6">
          <div className="portal p-6 border border-white/10 bg-[#09090e]">
            <span className="tag">OFFICIAL CHANNELS</span>
            <h4 className="text-lg font-bold text-white mt-3 mb-4">Social & Community Nodes</h4>
            <ul className="space-y-3">
              {socialLinks.map((s, idx) => (
                <li key={idx}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] border border-white/10 hover:border-amber-500/50 hover:bg-amber-500/[0.05] transition-all group"
                  >
                    <div>
                      <p className="text-xs font-bold text-white group-hover:text-amber-400">{s.name}</p>
                      <p className="text-[10px] text-muted-foreground">{s.handle}</p>
                    </div>
                    <span className="text-xs text-muted-foreground group-hover:text-amber-400">↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="portal p-6 border border-white/10 bg-[#09090e]">
            <span className="tag">PRESS & ARCHIVE</span>
            <h4 className="text-lg font-bold text-white mt-3 mb-1">Featured & References</h4>
            <p className="text-xs text-muted-foreground mb-4">
              Mentions of Zabibu Technika and Grape Technologies.
            </p>
            <div className="space-y-3">
              {pressReferences.map((item, idx) => (
                <a
                  key={idx}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 rounded-xl bg-white/[0.02] border border-white/10 hover:bg-white/[0.06] transition-all"
                >
                  <p className="text-xs font-bold text-zinc-200">{item.title}</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-[10px] text-muted-foreground">{item.source}</span>
                    <span className="text-[10px] text-amber-500 font-mono">{item.date}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </PortalFrame>
  );
}
