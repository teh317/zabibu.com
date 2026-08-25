'use client';

import { useEffect, useState } from 'react';
import { PortalFrame, SectionHeading } from '@/components/portal-shell';

interface PostItem {
  title: string;
  link: string;
  pubDate: string;
  description?: string;
}

export default function Dispatches() {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/dispatches')
      .then((res) => res.json())
      .then((data) => {
        if (data.items && Array.isArray(data.items) && data.items.length > 0) {
          // Robust Date Parser to convert any format into a valid Unix timestamp
          const parseTime = (dateStr: string) => {
            const parsed = new Date(dateStr).getTime();
            if (!isNaN(parsed)) return parsed;

            // Handle custom 'MM / YYYY' format if passed
            const parts = dateStr.split('/');
            if (parts.length === 2) {
              const month = parseInt(parts[0].trim(), 10) - 1;
              const year = parseInt(parts[1].trim(), 10);
              return new Date(year, month, 1).getTime();
            }
            return 0;
          };

          // Explicitly sort descending (latest date first)
          const sorted = [...data.items].sort(
            (a, b) => parseTime(b.pubDate) - parseTime(a.pubDate)
          );

          setPosts(sorted);
        }
      })
      .catch(() => {
        // Handle fetch failure gracefully
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const cleanSnippet = (htmlString?: string) => {
    if (!htmlString) return 'A field note on resilience, local context, and sovereign tech.';

    let cleaned = htmlString
      // Remove figure/figcaption tags (Photo credits like Unsplash)
      .replace(/<figure[^>]*>[\s\S]*?<\/figure>/gi, '')
      // Remove img tags
      .replace(/<img[^>]*>/gi, '')
      // Remove all remaining HTML tags
      .replace(/<[^>]*>?/gm, '')
      // Remove common Medium author/photo subtitle noise
      .replace(/^Photo by [^.]*on Unsplash/gi, '')
      .replace(/^By [^\n—–-]*[—–-]/gi, '')
      .replace(/^Concept by [^\n]*/gi, '')
      .trim();

    if (cleaned.length < 20) {
      return 'A field note on resilience, local context, and sovereign tech.';
    }

    return cleaned.slice(0, 140) + '...';
  };

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return '2026';
    const date = new Date(dateStr);
    
    // If it's already in MM / YYYY format, return as is
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

      {loading ? (
        <div className="py-12 text-center font-mono text-xs uppercase tracking-widest text-muted-foreground animate-pulse">
          Loading dispatches from feed...
        </div>
      ) : (
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
      )}
    </PortalFrame>
  );
}
