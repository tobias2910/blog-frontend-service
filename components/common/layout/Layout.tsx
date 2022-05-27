import React, { ReactElement } from 'react';
import Head from '../Head';
import Navbar from '../Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Layout that provides the meta information as well as the navigation element
 *
 * @param {LayoutProps} props - A children that represents the page content needs to be provided
 * @returns  {ReactElement} - Returns the layout element
 */
const Layout = (props: LayoutProps): ReactElement => {
  const { children } = props;

  return (
    <>
      <Head />
      <Navbar navbarItems={['Home', 'Blog', 'Projects', 'Request']} />
      <main className="w-full">
        <div className="flex justify-center">
          <div className="max-w-7xl">
            { children }
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;
