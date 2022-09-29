import React from 'react';

import type { NextPage } from 'next';
import { SiReact } from 'react-icons/si';

import ProjectCard from '@components/common/ProjectCard';

const Projects: NextPage = () => (
  <div className="w-10/12 text-center m-auto">
    <span className="text-xl">
      Currently in development. In the future, you will find here an overview of
      the projects I have finished so far.
    </span>
    <div className="grid grid-flow-row">
      <ProjectCard
        title="My super asset project"
        description="This is my super super asset project that I really hate since it isnt that good. Unfortunantely. But I will do it better"
        imageUrl="/avatar.jpeg"
        projectUrl="https://asset-monitoring.de"
        tags={[
          { icon: SiReact, text: 'React' },
          { icon: SiReact, text: 'React' },
          { icon: SiReact, text: 'TailwindCSS' },
          { icon: SiReact, text: 'React' },
          { icon: SiReact, text: 'React' },
        ]}
      />{' '}
      <ProjectCard
        title="My super asset project"
        description="This is my description. is is my description. This is my description"
        imageUrl="/avatar.jpeg"
        projectUrl="https://asset-monitoring.de"
        tags={[{ icon: SiReact, text: 'React' }]}
      />
    </div>
  </div>
);

export default Projects;
