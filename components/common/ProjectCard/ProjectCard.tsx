import React, { FC } from 'react';
import Image from 'next/image';

import Card from '@components/ui/Card';
import Chip from '@components/ui/Chip';
import CardTags from '../../../typings/cardTags';

interface ProjectCardProps {
  title: string;
  imageUrl: string;
  description: string;
  tags: CardTags[];
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
  <div className="w-[14rem] md:w-80 h-80 md:h-[21rem]">
    <Card className="h-full w-full">
      <div className="flex flex-col items-center h-full relative">
        <span className="text-base md:text-lg underline decoration-secondary font-semibold mb-3 hover:decoration-secondary-2 duration-300 h-5">
          {title}
        </span>
        <div className="h-32 md:h40 w-48 md:w-64 relative mb-2">
          <Image
            src={imageUrl}
            className="rounded"
            about="image of the Project"
            layout="fill"
          />
        </div>
        <span className="text-center text-xs md:text-sm leading-3 h-14 mb-2 ">
          {description}
        </span>
        <a
          className="flex border-secondary rounded-sm justify-center items-center border md:border-2 text-xs w-24 h-6 md:w-32 md:h-8 text-center hover:border-secondary-2 transition-colors duration-500 ease-linear mb-1"
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show project
        </a>
        <div className="bottom-0 absolute w-full">
          <hr className="border-[0.4px] rounded w-full border-secondary-2 mb-1" />
          <div className="flex flex-wrap mb-1 justify-around w-full last:justify-evenly">
            {tags.slice(0, 3).map((tag) => (
              <Chip
                key={tag.text}
                Icon={tag.icon}
                text={tag.text}
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
