import { clsx } from 'clsx';
import { marked } from 'marked';
import { useState, useEffect } from 'react';

interface ArticleProps {
  className?: string;
  filename: string;
}

export function Article({ className, filename }: ArticleProps) {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    async function fetchMarkdown() {
      const res = await fetch(filename);
      const text = await res.text();
      setMarkdown(text);
    }
    fetchMarkdown();
  }, [filename]);

  return (
    <article
      className={clsx('prose md:prose-xl xl:prose-2xl prose-invert', className)}
      dangerouslySetInnerHTML={{ __html: marked(markdown) }}
    />
  );
}
