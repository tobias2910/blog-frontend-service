import React from 'react';
import { NextPage } from 'next';

const Custom404: NextPage = () => (
  <div className="flex flex-col h-full justify-center items-center">
    <span className="text-6xl m-4">
      🥺
    </span>
    <span className="text-2xl text-center">
      This page seems not to be available.
    </span>
  </div>
);

export default Custom404;
