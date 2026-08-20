'use client';
import { useEffect, useState } from 'react';

export default function Dispatches() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zabibutechnika')
      .then((res) => res.json())
      .then((data) => {
        if (data.items) setPosts(data.items.slice(0, 3));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return Loading live dispatches...;

  return (
    
      {posts.map((post, idx) => (
        
          {post.pubDate.split(' ')[0]}
          {post.title}
          ]*>?/gm, '') }} />
          Read on Medium ↗
        
      ))}
    
  );
}


import { PortalFrame, PortalShell, SectionHeading } from '@/components/portal-shell'
const posts = ['The future should feel like a place you recognize.','Why software should guide hardware','Dispatches from the low-spec frontier']
export default function Dispatches() { return <PortalShell><PortalFrame><SectionHeading eyebrow="Dispatches / field notes" title={<>Reports from<br /><span className="text-gradient">the edge.</span></>} copy="Engineering essays, manifestos, and field reports from Nairobi and the low-spec frontier." /><div className="grid gap-4 md:grid-cols-3">{posts.map((post, i) => <article className="post-card" key={post}><p className="text-xs uppercase tracking-widest text-accent">0{i + 1} / 2026</p><h2 className="mt-6 text-2xl font-bold">{post}</h2><p className="mt-4 text-sm leading-6 text-muted-foreground">A field note on resilience, local context, and tools that respect the machines they run on.</p><a className="mt-8 inline-block text-xs font-bold uppercase tracking-widest text-accent" href="https://medium.com/@zabibutechnika">Read on Medium ↗</a></article>)}</div></PortalFrame></PortalShell> }
