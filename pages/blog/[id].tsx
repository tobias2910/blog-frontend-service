import React from 'react';
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from 'next';

import Article from '@components/Article';
import fetchData from 'utils/api/fetchData';
import { Article as ArticleType } from 'typings/article';

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

  return {
    props: {
      article,
    },
    revalidate: 6000,
  };
};

const BlogPage = ({
  article,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <Article content={article.content} />
);

export default BlogPage;
