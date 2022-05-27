import React from 'react';
import type { FC } from 'react';
import SEO from '../SEO';

/**
 * Return the meta information for the website
 *
 * @returns {ReactElement}
 */
const Head: FC = () => (
  <SEO>
    <meta
      key="viewport"
      name="viewport"
      content="width=device-width, initial-scale=1"
    />
    {/* <link rel="manifest" href="/site.webmanifest" key="site-manifest" /> */}
  </SEO>
);

export default Head;
