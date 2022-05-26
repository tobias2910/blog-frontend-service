import React from 'react';
import Head from '../Head';
import Navbar from '../Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children } = props;

  return (
    <>
      <Head />
      <Navbar navbarItems={['Home', 'Blog', 'Projects', 'Request']} />
      <main className="w-full">
        <div className="flex justify-center overflow-y-scroll">
          <div className="max-w-7xl">
            { children }
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
