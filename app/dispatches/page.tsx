'use client';

import { useEffect, useState } from 'react';
import { PortalFrame, PortalShell, SectionHeading } from '@/components/portal-shell';

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
    fetch('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@zabibutechnika')
      .then((res) => res.json())
      .then((data) => {
        if (data.items && data.items.length > 0) {
          setPosts(data.items.slice(0, 3));
        }
      })
      .catch(() => {
        // Keeps fallback posts active if fetch fails
      });
  }, []);

  const cleanSnippet = (htmlString?: string) => {
    if (!htmlString) return 'A field note on resilience, local context, and sovereign tech.';
    return htmlString.replace(/<[^>]*>?/gm, '').slice(0, 130) + '...';
  };

  return (
    <PortalShell>
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
                {post.pubDate ? post.pubDate.split(' ')[0] : `0${i + 1} / 2026`}
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
    </PortalShell>
  );
}
