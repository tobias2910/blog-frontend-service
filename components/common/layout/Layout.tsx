import React, { ReactElement, useState } from 'react';

import Head from '../Head';
import Navbar from '../Navbar';
import Drawer from '../Drawer';

interface LayoutProps {
  children: React.ReactNode;
}

const pageItems = ['Home', 'Blog', 'Projects', 'Request'];

/**
 * Layout that provides the meta information as well as the navigation element
 *
 * @param {LayoutProps} props - A children that represents the page content needs to be provided
 * @returns  {ReactElement} - Returns the layout element
 */
const Layout = (props: LayoutProps): ReactElement => {
  const { children } = props;
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const handleClick = () => {
    setDrawerIsOpen(!drawerIsOpen);
  };

  return (
    <>
      <Head />
      <Navbar
        navbarItems={pageItems}
        drawerIsOpen={drawerIsOpen}
        handleDrawerToggle={handleClick}
      />
      <Drawer isOpen={drawerIsOpen} navItems={pageItems} />
      <main className="w-full">
        <div className="flex justify-center">
          <div className="max-w-7xl md:text-base">
            { children }
          </div>
        </div>
      </main>
    </>
  );
};

export default Layout;