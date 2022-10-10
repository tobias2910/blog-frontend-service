import React from 'react';

import type { InferGetStaticPropsType } from 'next';

import ProjectCard from '@components/common/ProjectCard';
import { Token } from '../../typings/token';
import { Project } from '../../typings/project';

export const getStaticProps = async () => {
  const authRes = await fetch(
    `${process.env.BLOG_RESTAPI_URL}/api/v1/auth/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: process.env.API_USERNAME,
        password: process.env.API_PASSWORD,
      }),
    }
  );
  const token: Token = await authRes.json();

  if (!authRes.ok) {
    throw new Error(
      `Failed to fetch auth token. Error code ${authRes.statusText}`
    );
  }

  const headers = new Headers({
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token.access_token.token}`,
  });

  const projectsRes = await fetch(
    `${process.env.BLOG_RESTAPI_URL}/api/v1/projects/`,
    { headers }
  );

  if (!projectsRes.ok) {
    throw new Error(
      `Failed to fetch new skills. Error code ${projectsRes.statusText}`
    );
  }

  const projects: Project[] = await projectsRes.json();
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
