import React from 'react';
import type { InferGetStaticPropsType } from 'next';

import ProjectCard from '@components/common/ProjectCard';
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
  <div className="grid grid-col-1 md:grid-cols-2 grid-flow-row gap-2">
    {projects.map((project) => (
      <ProjectCard
        title={project.title}
        description={project.description}
        imageUrl={project.image_url}
        projectUrl={project.project_url}
        tags={project.tags}
        key={project.id}
      />
    ))}
  </div>
);

export default Projects;
