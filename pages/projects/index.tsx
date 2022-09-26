import React from 'react';
import type { NextPage } from 'next';
import { DiReact } from 'react-icons/di';

import Chip from '@components/ui/Chip';

const Projects: NextPage = () => (
  <div className="text-center">
    Currently in development. In the future, you will find here an overview of
    the projects I have finished so far.
    <div className="flex flex-auto">
      <Chip text="React" Icon={DiReact} iconSize="small" type="filter" />
      <Chip text="React" Icon={DiReact} iconSize="medium" />
      <Chip text="React" Icon={DiReact} iconSize="large" />
    </div>
  </div>
);

export default Projects;
