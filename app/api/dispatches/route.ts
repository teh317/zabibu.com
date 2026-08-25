import { NextResponse } from 'next/server';

export const revalidate = 60; // Revalidate feed every 60 seconds

export async function GET() {
  try {
    const res = await fetch('https://medium.com/feed/@zabibutechnika', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
      // Ensures Next.js fetches fresh data every minute
      next: { revalidate: 60 },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch Medium RSS: ${res.status}`);
    }

    const xmlText = await res.text();

    // Parse XML items using simple Regex (lightweight, zero npm packages)
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const items: Array<{ title: string; link: string; pubDate: string; description: string }> = [];

    let match;
    while ((match = itemRegex.exec(xmlText)) !== null) {
      const itemContent = match[1];

      const titleMatch = itemContent.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || itemContent.match(/<title>([\s\S]*?)<\/title>/);
      const linkMatch = itemContent.match(/<link>([\s\S]*?)<\/link>/);
      const dateMatch = itemContent.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
      const descMatch = itemContent.match(/<content:encoded><!\[CDATA\[([\s\S]*?)\]\]><\/content:encoded>/) || itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/);

      if (titleMatch && linkMatch) {
        items.push({
          title: titleMatch[1].trim(),
          link: linkMatch[1].trim(),
          pubDate: dateMatch ? dateMatch[1].trim() : new Date().toISOString(),
          description: descMatch ? descMatch[1].trim() : '',
        });
      }
    }

    // Sort by publication date descending (newest first)
    items.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime());

    return NextResponse.json({ items });
  } catch (error) {
    return NextResponse.json({ items: [], error: 'Failed to parse RSS' }, { status: 500 });
  }
}
