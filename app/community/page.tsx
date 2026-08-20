'use client';

import { useState } from 'react';
import { PortalFrame, PortalShell, SectionHeading } from '@/components/portal-shell';

interface Comment {
  author: string;
  handle: string;
  location: string;
  topic: string;
  message: string;
  time: string;
}

const initialComments: Comment[] = [
  {
    author: 'Kaelo M.',
    handle: '@kaelo_dev',
    location: 'Nairobi, KE',
    topic: 'Zabibu ARIF',
    message: 'Running ARIF v5.1.25x on an old Tecno device with sub-1MB RAM overhead is surreal. Socratic mode genuinely spars instead of rambling.',
    time: '2 hours ago',
  },
  {
    author: 'Amina O.',
    handle: '@amina_tech',
    location: 'Lagos, NG',
    topic: 'ZabibuOS',
    message: 'The Hewani and Ardhi elemental themes give hardware an identity that feels like home rather than another sterile Silicon Valley clone.',
    time: 'Yesterday',
  },
  {
    author: 'David K.',
    handle: '@david_eng',
    location: 'Kampala, UG',
    topic: 'Sovereign Stack',
    message: 'Software guiding hardware is the only viable path for the continent. Excited to see where Fikra 2B edge reasoning goes.',
    time: '2 days ago',
  },
];

export default function Community() {
  const [comments, setComments] = useState<Comment[]>(initialComments);
  const [author, setAuthor] = useState('');
  const [handle, setHandle] = useState('');
  const [location, setLocation] = useState('');
  const [topic, setTopic] = useState('Zabibu ARIF');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author || !message) return;

    const newComment: Comment = {
      author,
      handle: handle.startsWith('@') ? handle : `@${handle || 'contributor'}`,
      location: location || 'East Africa',
      topic,
      message,
      time: 'Just now',
    };

    setComments([newComment, ...comments]);
    setAuthor('');
    setHandle('');
    setLocation('');
    setMessage('');
  };

  return (
    <PortalShell>
      <PortalFrame>
        <SectionHeading
          eyebrow="Community & Sovereign Forum"
          title={
            <>
              The movement behind
              <br />
              <span className="text-gradient">the machines.</span>
            </>
          }
          copy="Zabibu Technika is built out in the open. Join our direct broadcasts, spar on core research themes, and shape the software stack."
        />

        {/* Primary Channel Gateways */}
        <div className="grid gap-6 md:grid-cols-3 my-10">
          <a
            href="https://whatsapp.com/channel/0029VbC0Nnj5a248TWBGLk2s"
            target="_blank"
            rel="noopener noreferrer"
            className="portal p-6 border-l-2 border-l-emerald-500 hover:border-emerald-400 transition-all block"
          >
            <span className="tag text-emerald-400">OFFICIAL CHANNEL</span>
            <h3 className="text-xl font-bold text-white mt-4">WhatsApp Channel</h3>
            <p className="text-xs text-muted-foreground mt-2">
              Instant product drops, patch notes, voice dispatches, and direct founder signals.
            </p>
            <span className="text-xs font-bold text-emerald-400 mt-6 inline-block">Join us ↗</span>
          </a>

          <a
            href="https://x.com/zabibutechnika"
            target="_blank"
            rel="noopener noreferrer"
            className="portal p-6 border-l-2 border-l-cyan-500 hover:border-cyan-400 transition-all block"
          >
            <span className="tag text-cyan-400">PUBLIC DEBATES</span>
            <h3 className="text-xl font-bold text-white mt-4">X / Twitter Hub</h3>
            <p className="text-xs text-muted-foreground mt-2">
              Philosophical sparring on edge AI, local-first architectures, and tech sovereignty.
            </p>
            <span className="text-xs font-bold text-cyan-400 mt-6 inline-block">Follow @zabibutechnika ↗</span>
          </a>

          <a
            href="https://app.payd.money/link/zabibu"
            target="_blank"
            rel="noopener noreferrer"
            className="portal p-6 border-l-2 border-l-amber-500 hover:border-amber-400 transition-all block"
          >
            <span className="tag text-amber-400">SOVEREIGN PATRONS</span>
            <h3 className="text-xl font-bold text-white mt-4">Patronage on Payd</h3>
            <p className="text-xs text-muted-foreground mt-2">
              Directly back ongoing edge research and serverless node deployment via M-Pesa or Card.
            </p>
            <span className="text-xs font-bold text-amber-400 mt-6 inline-block">Back on Payd ↗</span>
          </a>
        </div>

        {/* Live Feedback Board */}
        <div className="my-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="portal p-8 border border-white/10 bg-[#09090e]">
            <span className="tag">CONTRIBUTE</span>
            <h3 className="text-xl font-bold text-white mt-4">Leave a Field Note</h3>
            <p className="text-xs text-muted-foreground mt-1">
              Feedback, bug reports, and philosophical sparring directly for the engineering log.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-mono uppercase text-muted-foreground">Your Name</label>
                <input
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  placeholder="e.g. Kelvin Mutua"
                  className="w-full mt-1.5 p-2.5 rounded-lg bg-black border border-white/10 text-white text-xs focus:border-amber-500 focus:outline-none"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-mono uppercase text-muted-foreground">Handle</label>
                  <input
                    type="text"
                    value={handle}
                    onChange={(e) => setHandle(e.target.value)}
                    placeholder="@handle"
                    className="w-full mt-1.5 p-2.5 rounded-lg bg-black border border-white/10 text-white text-xs focus:border-amber-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-mono uppercase text-muted-foreground">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="City, Country"
                    className="w-full mt-1.5 p-2.5 rounded-lg bg-black border border-white/10 text-white text-xs focus:border-amber-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-muted-foreground">Topic</label>
                <select
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  className="w-full mt-1.5 p-2.5 rounded-lg bg-black border border-white/10 text-white text-xs focus:border-amber-500 focus:outline-none"
                >
                  <option value="Zabibu ARIF">Zabibu ARIF</option>
                  <option value="ZabibuOS">ZabibuOS</option>
                  <option value="Sigana TV">Sigana TV</option>
                  <option value="Fikra 2B Model">Fikra 2B Model</option>
                  <option value="Sovereign Stack Philosophy">Sovereign Stack Philosophy</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-mono uppercase text-muted-foreground">Your Message</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="What should we build or refine next?"
                  className="w-full mt-1.5 p-2.5 rounded-lg bg-black border border-white/10 text-white text-xs focus:border-amber-500 focus:outline-none"
                  required
                />
              </div>

              <button type="submit" className="glow-button w-full py-3 text-xs font-bold uppercase tracking-wider">
                Post to Sovereign Wall ↗
              </button>
            </form>
          </div>

          {/* Feed */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-widest text-accent mb-4">Live Sovereign Wall</h3>
            {comments.map((c, i) => (
              <div key={i} className="portal p-6 border border-white/10 bg-[#09090e]/80">
                <div className="flex justify-between items-start">
                  <div>
                    <span className="text-sm font-bold text-white">{c.author}</span>
                    <span className="text-xs text-muted-foreground ml-2 font-mono">{c.handle}</span>
                    <span className="text-[10px] text-amber-400/80 ml-2">({c.location})</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">{c.time}</span>
                </div>
                <div className="mt-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.05] border border-white/10 text-accent">
                    {c.topic}
                  </span>
                </div>
                <p className="mt-3 text-sm text-zinc-300 leading-relaxed">{c.message}</p>
              </div>
            ))}
          </div>
        </div>
      </PortalFrame>
    </PortalShell>
  );
}
