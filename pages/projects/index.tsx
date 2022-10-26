import React from 'react';
import type { InferGetStaticPropsType } from 'next';

import PostCard from '@components/common/ProjectCard';
import fetchData from 'utils/api/fetchData';
import { Project } from '../../typings/project';

export const getStaticProps = async () => {
  const projects = await fetchData<Project[]>('projects');

  return {
    props: {
      projects,
    },
    revalidate: 6000,
  };
};

const Projects = ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) => (
  <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-2 justify-center">
    {projects.map((project) => (
      <div key={project.id} className="justify-self-center">
        <PostCard
          title={project.title}
          description={project.description}
          imageUrl={project.image_url}
          targetUrl={project.project_url}
          tags={project.tags}
        />
      </div>
    ))}
  </div>
);

export default Projects;
