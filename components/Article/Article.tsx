import React, { FC } from 'react';
import { MDXRemote } from 'next-mdx-remote';

import Divider from '@components/ui/Divider';
import { FirstHeader, SecondHeader } from '@components/ui/Header';
import Link from '@components/ui/Link';
import Blockquote from '@components/ui/Blockquote';
import List from '@components/ui/List';
import { Table, TableData, TableHead } from '@components/ui/Table';
import { Article as ArticleType } from 'typings/article';

interface ArticleProps {
  data: ArticleType;
}

const Image = ({ src, alt }: { src: string; alt: string }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img className="py-2 m-auto" src={src} alt={alt} />
);

const Article: FC<ArticleProps> = ({ data }) => (
  <div className="flex flex-col break-normal">
    <div className="mb-4">
      <p className="text-3xl font-bold underline underline-offset-4 decoration-secondary">
        {data.title}
      </p>
      <div className="flex flex-col mt-2">
        <p className="text-xs">by {data.author}</p>
        <p className="text-xs">
          Published {`${data.created_at}${data.updated_at ? ' (edited)' : ''}`}
        </p>
      </div>
    </div>
    <Divider />
    <MDXRemote
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...data.content}
      components={{
        hr: Divider,
        h1: FirstHeader,
        h2: SecondHeader,
        // @ts-ignore
        a: Link,
        li: List,
        blockquote: Blockquote,
        table: Table,
        th: TableHead,
        // @ts-ignore
        img: Image,
        td: TableData,
      }}
    />
  </div>
);

export default Article;
