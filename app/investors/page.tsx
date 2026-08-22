'use client';

import { useState } from 'react';
import { PortalFrame, PortalShell, SectionHeading } from '@/components/portal-shell';

const tiers = [
  {
    tier: 'COMMUNITY PATRON',
    amount: '$10 — $500',
    subtitle: 'Fuel the sovereign computing stack directly',
    perks: [
      'Direct contribution to Zabibu ARIF & OS serverless nodes',
      'Listed on our open Sovereign Backers roll',
      'Early access to experimental alpha builds',
    ],
    actionText: 'Back via Payd (M-Pesa / Card) ↗',
    actionLink: 'https://app.payd.money/link/zabibu',
    highlight: false,
  },
  {
    tier: 'ANGEL CATALYST',
    amount: '$2,500 — $25,000',
    subtitle: 'High-conviction support for African deep tech',
    perks: [
      'Quarterly private engineering & metric briefings',
      'Direct line to founder Tehillah Mwangada Kachila',
      'Priority allocation in future equity rounds',
    ],
    actionText: 'Schedule Briefing Below',
    actionLink: '#booking-calendar',
    highlight: true,
  },
  {
    tier: 'STRATEGIC / INSTITUTIONAL',
    amount: '$25,000+',
    subtitle: 'Ecosystem deployment & infrastructure partnerships',
    perks: [
      'Commercial licensing rights for LISP & Virosauda IP',
      'Enterprise ZabibuOS hardware integration support',
      'Custom edge model co-development (Fikra engine)',
    ],
    actionText: 'Request Institutional Memo',
    actionLink: '#booking-calendar',
    highlight: false,
  },
];

const availableTimes = ['10:00 AM EAT', '02:00 PM EAT', '04:30 PM EAT', '07:00 PM EAT'];

export default function Investors() {
  const [selectedDate, setSelectedDate] = useState('2026-08-25');
  const [selectedTime, setSelectedTime] = useState('02:00 PM EAT');
  const [investorName, setInvestorName] = useState('');
  const [investorEmail, setInvestorEmail] = useState('');
  const [commentary, setCommentary] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleBooking = async (e: React.FormEvent) => {
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
          _subject: `New Investor Briefing Request: ${investorName}`,
          Investor_Name: investorName,
          Investor_Email: investorEmail,
          Requested_Date: selectedDate,
          Requested_Time: selectedTime,
          Commentary: commentary,
          Source: 'Zabibu Technika Investor Portal',
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        alert('Transmission failed. Please email zabibutechnika@gmail.com directly.');
      }
    } catch {
      alert('Network issue. Please reach out to zabibutechnika@gmail.com directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PortalShell>
      <PortalFrame>
        <SectionHeading
          eyebrow="Capital & Sovereign Infrastructure"
          title={
            <>
              Backing the systems
              <br />
              <span className="text-gradient">beneath the future.</span>
            </>
          }
          copy="Zabibu Technika engineers independent, high-conviction technology for the global South. We welcome patient capital, sovereign angels, and community patrons."
        />

        {/* Investment Tiers */}
        <div className="my-12">
          <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-6">Participation Tiers</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {tiers.map((t, i) => (
              <div
                key={i}
                className={`portal p-8 flex flex-col justify-between transition-all ${
                  t.highlight ? 'border-amber-500/40 bg-amber-500/[0.03]' : ''
                }`}
              >
                <div>
                  <span className="tag">{t.tier}</span>
                  <p className="text-2xl font-bold text-white mt-4">{t.amount}</p>
                  <p className="text-xs text-muted-foreground mt-1">{t.subtitle}</p>

                  <ul className="mt-6 space-y-2.5">
                    {t.perks.map((perk, pIdx) => (
                      <li key={pIdx} className="text-xs text-zinc-300 flex items-start gap-2">
                        <span className="text-accent">✓</span> {perk}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8">
                  {t.actionLink.startsWith('http') ? (
                    <a
                      href={t.actionLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glow-button w-full block text-center py-3 text-xs font-bold uppercase tracking-wider"
                    >
                      {t.actionText}
                    </a>
                  ) : (
                    <a
                      href={t.actionLink}
                      className="w-full block text-center py-3 text-xs font-bold uppercase tracking-wider rounded-xl bg-white/[0.05] border border-white/10 hover:bg-white/[0.1] text-white transition-all"
                    >
                      {t.actionText}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Self-Contained Booking Calendar & Commentary Section */}
        <div id="booking-calendar" className="my-16 portal p-8 md:p-12 border border-white/10 bg-[#09090e]">
          <span className="tag">DIRECT ENGAGEMENT</span>
          <h3 className="text-2xl font-bold text-white mt-4">Schedule a Founder Session & Discussion</h3>
          <p className="text-sm text-muted-foreground mt-1">
            Book an introduction with founder Tehillah Mwangada Kachila. Submissions dispatch directly to the executive office.
          </p>

          {submitted ? (
            <div className="my-8 p-6 rounded-xl bg-amber-500/10 border border-amber-500/30 text-center">
              <p className="text-base font-bold text-amber-400">Briefing Request Dispatched to Founder</p>
              <p className="text-xs text-zinc-300 mt-2">
                Thank you, {investorName}. Your reserved slot on {selectedDate} at {selectedTime} along with your note has been forwarded directly to zabibutechnika@gmail.com.
              </p>
            </div>
          ) : (
            <form onSubmit={handleBooking} className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Date & Time Slot Picker */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-mono uppercase text-muted-foreground">Select Date</label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full mt-2 p-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:border-amber-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-muted-foreground">Select Time Window (EAT - Nairobi)</label>
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {availableTimes.map((time) => (
                      <button
                        type="button"
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2.5 rounded-lg text-xs font-mono transition-all ${
                          selectedTime === time
                            ? 'bg-amber-500 text-black font-bold'
                            : 'bg-white/[0.03] border border-white/10 text-zinc-300 hover:border-white/30'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Commentary & Contact Input */}
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-mono uppercase text-muted-foreground">Your Name & Entity</label>
                  <input
                    type="text"
                    value={investorName}
                    onChange={(e) => setInvestorName(e.target.value)}
                    placeholder="e.g. Sarah Kimani / Sovereign Ventures"
                    className="w-full mt-2 p-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:border-amber-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-muted-foreground">Direct Email</label>
                  <input
                    type="email"
                    value={investorEmail}
                    onChange={(e) => setInvestorEmail(e.target.value)}
                    placeholder="investor@domain.com"
                    className="w-full mt-2 p-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:border-amber-500 focus:outline-none"
                    required
                  />
                </div>

                <div>
                  <label className="text-xs font-mono uppercase text-muted-foreground">Investment Commentary / Inquiry</label>
                  <textarea
                    rows={3}
                    value={commentary}
                    onChange={(e) => setCommentary(e.target.value)}
                    placeholder="Share areas of interest (e.g., Fikra 2B licensing, ZabibuOS hardware partnerships, patronage)..."
                    className="w-full mt-2 p-3 rounded-xl bg-black border border-white/10 text-white text-sm focus:border-amber-500 focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="glow-button w-full py-3.5 text-xs font-bold uppercase tracking-wider mt-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Transmitting to Zabibu...' : 'Confirm Briefing & Send Commentary ↗'}
                </button>
              </div>
            </form>
          )}
        </div>
      </PortalFrame>
    </PortalShell>
  );
}
