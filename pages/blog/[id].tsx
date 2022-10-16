import React from 'react';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';

import Article from '@components/Article';
import fetchData from 'utils/api/fetchData';
import { Article as ArticleType } from 'typings/article';
import { useTheme } from 'next-themes';

export const getStaticPaths: GetStaticPaths = async () => {
  const articles = await fetchData<ArticleType[]>('articles');

  const articleIds = articles.map((article) => ({
    params: { id: article.id.toString() },
  }));

  return {
    paths: articleIds,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;
  const article = await fetchData<ArticleType>(
    'articles',
    params!.id as string
  );

  article.content = await serialize(article.content, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypeHighlight],
    },
  });

  return {
    props: {
      article,
    },
    revalidate: 6000,
  };
};

const BlogPage = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { theme } = useTheme();

  return (
    <div className="flex justify-center align-middle">
      <link
        rel="stylesheet"
        href={`https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.6.0/styles/panda-syntax-${
          theme === 'light' ? 'light' : 'dark'
        }.min.css`}
      />
      <Article content={article.content} />
    </div>
  );
};

export default BlogPage;
