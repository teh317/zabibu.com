'use client';

import { useEffect, useState } from 'react';
import { PortalFrame, SectionHeading } from '@/components/portal-shell';

interface PostItem {
  title: string;
  link: string;
  pubDate: string;
  description?: string;
}

const fallbackPosts: PostItem[] = [
  {
    title: 'The future should feel like a place you recognize.',
    link: 'https://medium.com/@zabibutechnika',
    pubDate: '01 / 2026',
    description: 'A field note on resilience, local context, and tools that respect the machines they run on.',
  },
  {
    title: 'Why software should guide hardware',
    link: 'https://medium.com/@zabibutechnika',
    pubDate: '02 / 2026',
    description: 'Examining sovereign computing architectures and lightweight runtimes for the African continent.',
  },
  {
    title: 'Dispatches from the low-spec frontier',
    link: 'https://medium.com/@zabibutechnika',
    pubDate: '03 / 2026',
    description: 'Building software that runs smoothly on micro-browsers and sub-1MB memory constraints.',
  },
];

export default function Dispatches() {
  const [posts, setPosts] = useState<PostItem[]>(fallbackPosts);

  useEffect(() => {
    fetch('/api/dispatches')
      .then((res) => res.json())
      .then((data) => {
        if (data.items && Array.isArray(data.items) && data.items.length > 0) {
          // Sort explicitly by Unix timestamp descending (most recent first)
          const sorted = [...data.items].sort((a, b) => {
            const timeA = new Date(a.pubDate).getTime();
            const timeB = new Date(b.pubDate).getTime();
            return timeB - timeA;
          });

          // OVERWRITE posts completely with live data (do not append to fallbacks)
          setPosts(sorted);
        }
      })
      .catch(() => {
        // Retain hardcoded fallbackPosts only if API request fails completely
      });
  }, []);

  const cleanSnippet = (htmlString?: string) => {
    if (!htmlString) return 'A field note on resilience, local context, and sovereign tech.';
    return htmlString.replace(/<[^>]*>?/gm, '').slice(0, 130) + '...';
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '2026';
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) return dateStr;
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${month} / ${year}`;
  };

  return (
    <PortalFrame>
      <SectionHeading
        eyebrow="Dispatches / field notes"
        title={
          <>
            Reports from
            <br />
            <span className="text-gradient">the edge.</span>
          </>
        }
        copy="Engineering essays, manifestos, and field reports from Nairobi and the low-spec frontier."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {posts.map((post, i) => (
          <article className="post-card" key={post.link || i}>
            <p className="text-xs uppercase tracking-widest text-accent">
              {formatDate(post.pubDate)}
            </p>
            <h2 className="mt-6 text-2xl font-bold line-clamp-2">{post.title}</h2>
            <p className="mt-4 text-sm leading-6 text-muted-foreground line-clamp-3">
              {cleanSnippet(post.description)}
            </p>
            <a
              className="mt-8 inline-block text-xs font-bold uppercase tracking-widest text-accent hover:underline"
              href={post.link || 'https://medium.com/@zabibutechnika'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read on Medium ↗
            </a>
          </article>
        ))}
      </div>
    </PortalFrame>
  );
}
