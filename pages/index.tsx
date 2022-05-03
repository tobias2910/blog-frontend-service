import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => (
  <div>
    <Head>
      <title>Welcome</title>
      <meta name="description" content="Welcome to my personal page" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main className="flex h-screen w-screen">
      <div className="m-auto">
        <p className="text-center text-3xl">Welcome</p>
      </div>
    </main>
  </div>
);

export default Home;
