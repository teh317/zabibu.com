'use client'

import { useState, useEffect } from 'react'
import {
  MessageSquare,
  Briefcase,
  Terminal,
  HelpCircle,
  Send,
  CheckCircle2,
  Lock,
  ThumbsUp,
  UserCheck,
  Sparkles,
  Search,
  PlusCircle,
  HeartHandshake
} from 'lucide-react'
import { PortalFrame, SectionHeading } from '@/components/portal-shell'

// --- Interfaces ---
type Category = 'general' | 'hiring' | 'developers' | 'problems'

interface Post {
  id: string
  author: string
  handle: string
  location: string
  category: Category
  title: string
  message: string
  upvotes: number
  replies: { author: string; handle: string; text: string; time: string }[]
  time: string
  isPinned?: boolean
}

// --- Initial Authentic Data (No generic filler) ---
const INITIAL_POSTS: Post[] = [
  {
    id: 'post-1',
    author: 'Kelvin Mutua',
    handle: '@k_mutua',
    location: 'Nairobi, KE',
    category: 'developers',
    title: 'Fikra 2B 4-bit Quantization Benchmarks on Snapdragon 680',
    message: 'Managed to run Fikra 2B edge weights locally on an entry-level Android device with zero cloud latency. Memory footprint sat cleanly under 1.2GB. Pushing quantization scripts to GitHub today.',
    upvotes: 24,
    time: '3 hours ago',
    isPinned: true,
    replies: [
      { author: 'Amina O.', handle: '@amina_tech', text: 'This is massive for rural deployment. Are you using GGML or ONNX execution?', time: '2 hours ago' },
    ],
  },
  {
    id: 'post-2',
    author: 'Zabibu Core Team',
    handle: '@zabibutechnika',
    location: 'Nairobi HQ',
    category: 'hiring',
    title: 'Open Call: Low-Latency C++ / WebAssembly Core Contributor (Volunteer & Paid)',
    message: 'We are expanding the ZabibuOS local-first kernel. Looking for devs experienced in Rust, Wasm, or local IndexedDB sync strategies. Use the recruitment form below to submit your dispatch.',
    upvotes: 42,
    time: '1 day ago',
    isPinned: true,
    replies: [],
  },
  {
    id: 'post-3',
    author: 'David K.',
    handle: '@david_eng',
    location: 'Kampala, UG',
    category: 'problems',
    title: 'Offline sync conflict handling in high-latency 3G networks',
    message: 'When running ARIF companion sessions offline, local logs queue correctly. What conflict resolution vector strategy works best when reconnecting to mesh nodes?',
    upvotes: 11,
    time: 'Yesterday',
    replies: [
      { author: 'Zabibu Core', handle: '@zabibutechnika', text: 'We use CRDTs (Conflict-free Replicated Data Types) client-side. Check out the ZabibuOS architecture notes.', time: '18 hours ago' },
    ],
  },
  {
    id: 'post-4',
    author: 'Grace N.',
    handle: '@grace_design',
    location: 'Lagos, NG',
    category: 'general',
    title: 'The visual design language of African-rooted operating systems',
    message: 'The Hewani and Ardhi themes in ZabibuOS feel deeply authentic. Software UI should reflect physical ecosystems rather than corporate silicon design.',
    upvotes: 18,
    time: '2 days ago',
    replies: [],
  },
]

export default function Community() {
  // State
  const [activeTab, setActiveTab] = useState<Category | 'all'>('all')
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS)
  const [searchQuery, setSearchQuery] = useState('')
  const [showNewPostModal, setShowNewPostModal] = useState(false)

  // New Post Form State
  const [newTitle, setNewTitle] = useState('')
  const [newAuthor, setNewAuthor] = useState('')
  const [newHandle, setNewHandle] = useState('')
  const [newLocation, setNewLocation] = useState('')
  const [newCategory, setNewCategory] = useState<Category>('general')
  const [newMessage, setNewMessage] = useState('')

  // Reply Input State per Post
  const [replyText, setReplyText] = useState<{ [postId: string]: string }>({})

  // Recruitment / Hiring Application State
  const [appEmail, setAppEmail] = useState('')
  const [appName, setAppName] = useState('')
  const [appRole, setAppRole] = useState('Core Developer (Volunteer / Open Source)')
  const [appLinks, setAppLinks] = useState('')
  const [appBio, setAppBio] = useState('')
  const [appSent, setAppSent] = useState(false)
  const [appLoading, setAppLoading] = useState(false)

  // Load local posts on mount
  useEffect(() => {
    const stored = localStorage.getItem('zabibu_forum_posts')
    if (stored) {
      try {
        setPosts(JSON.parse(stored))
      } catch (e) {
        console.error('Error loading posts:', e)
      }
    }
  }, [])

  // Save posts to localStorage
  const savePosts = (updated: Post[]) => {
    setPosts(updated)
    localStorage.setItem('zabibu_forum_posts', JSON.stringify(updated))
  }

  // Handle New Post Submission
  const handleCreatePost = (e: React.FormEvent) => {
    e.preventDefault()
    if (!newTitle || !newAuthor || !newMessage) return

    const created: Post = {
      id: `post-${Date.now()}`,
      author: newAuthor,
      handle: newHandle.startsWith('@') ? newHandle : `@${newHandle || 'builder'}`,
      location: newLocation || 'Nairobi, KE',
      category: newCategory,
      title: newTitle,
      message: newMessage,
      upvotes: 1,
      time: 'Just now',
      replies: [],
    }

    const updated = [created, ...posts]
    savePosts(updated)
    setShowNewPostModal(false)

    // Reset Form
    setNewTitle('')
    setNewAuthor('')
    setNewHandle('')
    setNewLocation('')
    setNewMessage('')
  }

  // Handle Upvotes
  const handleUpvote = (id: string) => {
    const updated = posts.map((p) => (p.id === id ? { ...p, upvotes: p.upvotes + 1 } : p))
    savePosts(updated)
  }

  // Handle Reply Submission
  const handleAddReply = (postId: string, e: React.FormEvent) => {
    e.preventDefault()
    const text = replyText[postId]
    if (!text || !text.trim()) return

    const updated = posts.map((p) => {
      if (p.id === postId) {
        return {
          ...p,
          replies: [
            ...p.replies,
            {
              author: 'Community Member',
              handle: '@contributor',
              text: text.trim(),
              time: 'Just now',
            },
          ],
        }
      }
      return p
    })

    savePosts(updated)
    setReplyText({ ...replyText, [postId]: '' })
  }

  // Handle Job/Volunteer Application Dispatch to Email
  const handleRecruitmentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!appEmail || !appName || !appBio) return

    setAppLoading(true)
    const subject = encodeURIComponent(`[Zabibu Careers/Volunteer] ${appRole} - ${appName}`)
    const body = encodeURIComponent(
      `Name: ${appName}\nEmail: ${appEmail}\nTrack/Role: ${appRole}\nGitHub/Portfolio: ${appLinks}\n\nBackground & Motivation:\n${appBio}`
    )

    setTimeout(() => {
      window.location.href = `mailto:zabibutechnika@gmail.com?subject=${subject}&body=${body}`
      setAppLoading(false)
      setAppSent(true)
    }, 500)
  }

  // Filter posts based on active category tab and search query
  const filteredPosts = posts.filter((p) => {
    const matchesTab = activeTab === 'all' || p.category === activeTab
    const matchesSearch =
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.author.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTab && matchesSearch
  })

  return (
    <PortalFrame>
      <SectionHeading
        eyebrow="Zabibu Sovereign Ecosystem / Forum"
        title={
          <>
            The communications hub for
            <br />
            <span className="text-gradient">African sovereign tech.</span>
          </>
        }
        copy="A zero-latency, local-first social forum for developers, fans, and prospective team members to collaborate out in the open."
      />

      {/* Primary Channel Gateways */}
      <div className="grid gap-4 md:grid-cols-3 my-8">
        <a
          href="https://whatsapp.com/channel/0029VbC0Nnj5a248TWBGLk2s"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-emerald-500/30 bg-emerald-950/10 p-5 hover:border-emerald-400 transition-all block"
        >
          <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-400">Direct Broadcast</span>
          <h3 className="text-lg font-bold text-white mt-2">WhatsApp Channel</h3>
          <p className="text-xs text-white/60 mt-1">Product drops, audio notes, and direct founder signals.</p>
          <span className="text-xs font-bold text-emerald-400 mt-4 inline-block">Join Channel ↗</span>
        </a>

        <a
          href="https://x.com/zabibutechnika"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-cyan-500/30 bg-cyan-950/10 p-5 hover:border-cyan-400 transition-all block"
        >
          <span className="font-mono text-[10px] uppercase tracking-wider text-cyan-400">Public Debates</span>
          <h3 className="text-lg font-bold text-white mt-2">X / Twitter Hub</h3>
          <p className="text-xs text-white/60 mt-1">Philosophical sparring on edge AI and local-first stack.</p>
          <span className="text-xs font-bold text-cyan-400 mt-4 inline-block">Follow @zabibutechnika ↗</span>
        </a>

        <a
          href="https://app.payd.money/link/zabibu"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-2xl border border-amber-500/30 bg-amber-950/10 p-5 hover:border-amber-400 transition-all block"
        >
          <span className="font-mono text-[10px] uppercase tracking-wider text-amber-400">Patronage</span>
          <h3 className="text-lg font-bold text-white mt-2">Patronage on Payd</h3>
          <p className="text-xs text-white/60 mt-1">Back edge research directly via M-Pesa or Card.</p>
          <span className="text-xs font-bold text-amber-400 mt-4 inline-block">Back Project ↗</span>
        </a>
      </div>

      {/* Main Forum Header Controls */}
      <div className="mt-12 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        {/* Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 font-mono text-xs">
          {[
            { id: 'all', label: 'All Boards' },
            { id: 'general', label: 'General Chat', icon: MessageSquare },
            { id: 'developers', label: 'Developer / Code', icon: Terminal },
            { id: 'problems', label: 'Problem Solving', icon: HelpCircle },
            { id: 'hiring', label: 'Hiring & Work', icon: Briefcase },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as Category | 'all')}
              className={`px-3.5 py-2 rounded-xl transition-all shrink-0 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-amber-500 text-black font-bold'
                  : 'bg-white/5 text-white/70 hover:bg-white/10'
              }`}
            >
              {tab.icon && <tab.icon className="size-3.5" />}
              {tab.label}
            </button>
          ))}
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">
          <div className="relative flex-1 md:w-56">
            <Search className="size-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/40" />
            <input
              type="text"
              placeholder="Search forum..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-white/10 bg-black text-xs text-white placeholder-white/40 outline-none focus:border-amber-400"
            />
          </div>

          <button
            onClick={() => setShowNewPostModal(true)}
            className="glow-button inline-flex items-center gap-2 bg-amber-500 px-4 py-2 text-xs font-bold uppercase tracking-wider text-black rounded-xl shrink-0"
          >
            <PlusCircle className="size-4" /> Start Thread
          </button>
        </div>
      </div>

      {/* Forum Threads Feed */}
      <div className="mt-6 space-y-4">
        {filteredPosts.length === 0 ? (
          <div className="rounded-2xl border border-white/10 bg-black/40 p-12 text-center">
            <p className="text-sm text-white/50">No discussions found in this board.</p>
          </div>
        ) : (
          filteredPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur-md transition-all hover:border-amber-500/30"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md border border-amber-500/30 bg-amber-950/30 text-amber-400">
                      {post.category}
                    </span>
                    {post.isPinned && (
                      <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md border border-emerald-500/30 bg-emerald-950/30 text-emerald-400 flex items-center gap-1">
                        <Sparkles className="size-3" /> Pinned
                      </span>
                    )}
                    <span className="text-xs font-semibold text-white">{post.author}</span>
                    <span className="font-mono text-xs text-white/40">{post.handle}</span>
                    <span className="text-[10px] text-amber-400/70">({post.location})</span>
                  </div>
                  <h3 className="text-base font-bold text-white pt-1">{post.title}</h3>
                </div>
                <span className="font-mono text-[10px] text-white/40 shrink-0">{post.time}</span>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/80">{post.message}</p>

              {/* Interactivity Footer */}
              <div className="mt-5 flex items-center justify-between border-t border-white/5 pt-4">
                <button
                  onClick={() => handleUpvote(post.id)}
                  className="flex items-center gap-1.5 font-mono text-xs text-white/60 hover:text-amber-400 transition-colors"
                >
                  <ThumbsUp className="size-3.5" /> {post.upvotes} Upvotes
                </button>
                <span className="font-mono text-xs text-white/40">{post.replies.length} Replies</span>
              </div>

              {/* Replies Section */}
              {post.replies.length > 0 && (
                <div className="mt-4 space-y-2 border-l-2 border-amber-500/20 pl-4 pt-1">
                  {post.replies.map((r, idx) => (
                    <div key={idx} className="text-xs bg-white/[0.02] p-3 rounded-lg border border-white/5">
                      <div className="flex items-center gap-2 font-mono text-[10px] text-amber-400">
                        <span>{r.author}</span>
                        <span className="text-white/40">{r.handle}</span>
                        <span className="text-white/30">• {r.time}</span>
                      </div>
                      <p className="mt-1 text-white/70">{r.text}</p>
                    </div>
                  ))}
                </div>
              )}

              {/* Reply Form */}
              <form onSubmit={(e) => handleAddReply(post.id, e)} className="mt-4 flex gap-2">
                <input
                  type="text"
                  placeholder="Reply to thread..."
                  value={replyText[post.id] || ''}
                  onChange={(e) => setReplyText({ ...replyText, [post.id]: e.target.value })}
                  className="flex-1 rounded-xl border border-white/10 bg-amber-950/10 px-3 py-2 text-xs text-white placeholder-white/30 outline-none focus:border-amber-400"
                />
                <button
                  type="submit"
                  className="px-3 py-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 rounded-xl text-xs font-mono uppercase hover:bg-amber-500/20"
                >
                  Reply
                </button>
              </form>
            </article>
          ))
        )}
      </div>

      {/* Dedicated Hiring & Volunteer Portal */}
      <section className="mt-16 rounded-2xl border border-amber-500/30 bg-black/60 p-8 md:p-10">
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-amber-400 mb-2">
          <Briefcase className="size-4" /> Work With Us / Volunteer Track
        </div>
        <h2 className="text-2xl font-bold text-white md:text-3xl">
          Build Sovereign Systems with Zabibu Technika
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-white/60">
          We welcome core engineers, open-source volunteers, AI researchers, and community ambassadors. Submit your profile directly to our core engineering queue.
        </p>

        {!appSent ? (
          <form onSubmit={handleRecruitmentSubmit} className="mt-8 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-amber-400 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Wanjiku Kimani"
                  value={appName}
                  onChange={(e) => setAppName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-amber-950/10 p-3 text-sm text-white placeholder-white/30 outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-amber-400 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="you@domain.com"
                  value={appEmail}
                  onChange={(e) => setAppEmail(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-amber-950/10 p-3 text-sm text-white placeholder-white/30 outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-amber-400 mb-1.5">
                  Desired Capacity / Track
                </label>
                <select
                  value={appRole}
                  onChange={(e) => setAppRole(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-3 text-sm text-white outline-none focus:border-amber-400"
                >
                  <option value="Core Developer (Volunteer / Open Source)">Core Developer (Volunteer / Open Source)</option>
                  <option value="Full-Time Systems Engineer">Full-Time Systems Engineer</option>
                  <option value="AI / Quantization Researcher">AI / Quantization Researcher</option>
                  <option value="Community Ambassador / Writer">Community Ambassador / Writer</option>
                </select>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-amber-400 mb-1.5">
                  GitHub / Portfolio / X Link
                </label>
                <input
                  type="text"
                  placeholder="github.com/username or portfolio link"
                  value={appLinks}
                  onChange={(e) => setAppLinks(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-amber-950/10 p-3 text-sm text-white placeholder-white/30 outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div>
              <label className="block font-mono text-[10px] uppercase tracking-wider text-amber-400 mb-1.5">
                Background & What You Want to Build
              </label>
              <textarea
                required
                rows={3}
                placeholder="Tell us about your technical skills, projects, or why you want to contribute to local-first tech..."
                value={appBio}
                onChange={(e) => setAppBio(e.target.value)}
                className="w-full rounded-xl border border-white/10 bg-amber-950/10 p-3 text-sm text-white placeholder-white/30 outline-none focus:border-amber-400 resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
              <span className="flex items-center gap-1.5 font-mono text-[10px] text-white/40">
                <Lock className="size-3 text-amber-400" /> Direct dispatch to zabibutechnika@gmail.com
              </span>
              <button
                type="submit"
                disabled={appLoading}
                className="glow-button inline-flex items-center gap-2 bg-amber-500 px-6 py-3 text-xs font-bold uppercase tracking-wider text-black rounded-xl disabled:opacity-40"
              >
                {appLoading ? 'Preparing Application...' : 'Submit Application'} <Send className="size-4" />
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-950/20 p-6 text-center space-y-3">
            <CheckCircle2 className="size-8 text-amber-400 mx-auto" />
            <h3 className="text-lg font-bold text-white">Application Formatted</h3>
            <p className="text-xs text-white/60 max-w-md mx-auto">
              Your default email app has opened with your details routed to <span className="text-amber-400">zabibutechnika@gmail.com</span>. Send the email to finalize your submission!
            </p>
            <button
              onClick={() => setAppSent(false)}
              className="font-mono text-[11px] text-amber-400 uppercase tracking-wider hover:underline block mx-auto pt-2"
            >
              Submit Another Profile
            </button>
          </div>
        )}
      </section>

      {/* Start New Thread Modal */}
      {showNewPostModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="w-full max-w-lg rounded-2xl border border-amber-500/30 bg-[#09090e] p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-4">Start New Forum Thread</h3>
            <form onSubmit={handleCreatePost} className="space-y-4">
              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-amber-400 mb-1">
                  Thread Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Optimizing low-bandwidth WebSocket reconnection"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-3 text-xs text-white outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-amber-400 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={newAuthor}
                    onChange={(e) => setNewAuthor(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black p-3 text-xs text-white outline-none focus:border-amber-400"
                  />
                </div>
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-amber-400 mb-1">
                    Handle
                  </label>
                  <input
                    type="text"
                    placeholder="@handle"
                    value={newHandle}
                    onChange={(e) => setNewHandle(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black p-3 text-xs text-white outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-amber-400 mb-1">
                    Board Category
                  </label>
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as Category)}
                    className="w-full rounded-xl border border-white/10 bg-black p-3 text-xs text-white outline-none focus:border-amber-400"
                  >
                    <option value="general">General Chat</option>
                    <option value="developers">Developer / Code</option>
                    <option value="problems">Problem Solving</option>
                    <option value="hiring">Hiring & Work</option>
                  </select>
                </div>

                <div>
                  <label className="block font-mono text-[10px] uppercase tracking-wider text-amber-400 mb-1">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Nairobi, KE"
                    value={newLocation}
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-black p-3 text-xs text-white outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-[10px] uppercase tracking-wider text-amber-400 mb-1">
                  Message Content
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details, code snippets, or questions..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-black p-3 text-xs text-white outline-none focus:border-amber-400 resize-none"
                />
              </div>

              <div className="flex justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowNewPostModal(false)}
                  className="px-4 py-2 text-xs font-mono text-white/60 hover:text-white"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="glow-button bg-amber-500 px-5 py-2 text-xs font-bold uppercase tracking-wider text-black rounded-xl"
                >
                  Publish Post
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </PortalFrame>
  )
}
