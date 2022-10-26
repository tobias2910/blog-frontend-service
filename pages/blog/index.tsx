import React from 'react';
import type { InferGetStaticPropsType } from 'next';

import fetchData from 'utils/api/fetchData';
import { Article } from 'typings/article';
import BlogCard from '@components/common/BlogCard';

export const getStaticProps = async () => {
  const articlesPayload = await fetchData<Article[]>('articles');
  // Remove the content property of every article
  const articles = articlesPayload.map(({ content, ...article }) => article);

  return {
    props: {
      articles,
    },
    revalidate: 6000,
  };
};

const Blog = ({ articles }: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-2 justify-center">
    {articles.map((article) => (
      <div key={article.id} className="justify-self-center w-full">
        <BlogCard
          author={article.author}
          createdAt={article.created_at}
          description={article.description}
          tags={article.tags}
          title={article.title}
          id={article.id}
        />
      </div>
    ))}
  </div>
);

export default Blog;
