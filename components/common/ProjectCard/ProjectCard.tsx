import React, { FC } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import Card from '@components/ui/Card';
import Chip from '@components/ui/Chip';
import { Tag } from '../../../typings/project';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: string;
  tags: Tag[];
  projectUrl: string;
}

/**
 *
 * @param param0
 * @returns
 */
const ProjectCard: FC<ProjectCardProps> = ({
  title,
  imageUrl,
  description,
  tags,
  projectUrl,
}) => (
  <div className="w-96 h-96">
    <Card className="h-full w-full">
      <div className="flex flex-col items-center h-full relative">
        <span className="text-xl underline decoration-secondary-2 font-semibold mb-4 h-5">
          {title}
        </span>
        <div className="h-36 w-full relative mb-3">
          <Image
            src={imageUrl}
            className="rounded"
            about="image of the Project"
            layout="fill"
          />
        </div>
        <span className="text-center  text-base h-20 md:h-20 mb-1">
          {description}
        </span>
        <a
          className="flex border-secondary rounded-sm justify-center items-center border font-semibold md:border text-xs md:text-sm w-28 h-7 md:w-32 md:h-8 text-center hover:border-secondary-2 transition-colors duration-500 ease-linear"
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show project
        </a>
        <div className="bottom-0 absolute w-full">
          <hr className="border-1 rounded w-full border-secondary-2 my-2" />
          <div className="flex flex-wrap mb-1 justify-around w-full">
            {tags.slice(0, 3).map((tag) => (
              <Chip
                key={tag.name}
                // @ts-ignore
                Icon={dynamic(() =>
                  import('react-icons/si').then((mod) => mod[tag.icon_name])
                )}
                text={tag.name}
                iconSize="medium"
                type="standard"
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  </div>
);

export default ProjectCard;
