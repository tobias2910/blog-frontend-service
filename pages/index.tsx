import React from 'react';
import type { NextPage } from 'next';
import TypeWritingEffect from '../components/common/TypeWritingEffect';

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => (
  <div className="w-full flex justify-center items-center h-4/5">
    <TypeWritingEffect
      wordList={['Welcome', 'Bienvenidas', 'Willkommen', 'أهلا بك', 'Bienvenue', '欢迎']}
      typingInterval={100}
      deletingInterval={50}
      pausingDuration={3000}
      className="text-3xl md:text-6xl text-center font-semibold"
    />
  </div>
);

export default Home;
