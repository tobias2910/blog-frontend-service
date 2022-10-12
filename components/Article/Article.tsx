import React, { FC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface ArticleProps {
  content: string;
}

const styledHr = () => <hr className="border-1 border-secondary" />;

const Article: FC<ArticleProps> = ({ content }) => (
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    components={{
      hr: styledHr,
    }}
  >
    {content}
  </ReactMarkdown>
);

export default Article;
