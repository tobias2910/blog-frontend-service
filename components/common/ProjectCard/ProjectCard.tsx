import React, { FC } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';

import Card from '@components/ui/Card';
import Chip from '@components/ui/Chip';
import { Tag } from '../../../typings/project';

interface PostCardProps {
  title: string;
  imageUrl: string;
  description: string;
  tags: Tag[];
  targetUrl: string;
}

/**
 *
 * @param param0
 * @returns
 */
const ProjectCard: FC<PostCardProps> = ({
  title,
  imageUrl,
  description,
  tags,
  targetUrl,
}) => (
  <Card>
    <div className="flex flex-col items-center relative h-[22rem] max-w-[22rem] w-full">
      <span className="text-xl underline underline-offset-2 decoration-secondary font-semibold mb-4 h-5">
        {title}
      </span>
      <div className="h-32 w-5/6 relative mb-3">
        <Image
          src={imageUrl}
          className="rounded"
          about="image of the Project"
          layout="fill"
        />
      </div>
      <span className="text-center text-base mb-1">{description}</span>
      <div className="bottom-0 absolute w-full">
        <a
          className="flex border-secondary outline-none focus:border-secondary-2 m-auto mb-3 rounded-sm justify-center items-center border font-semibold md:border text-xs md:text-sm w-28 h-7 md:w-32 md:h-8 text-center hover:border-secondary-2 transition-colors duration-500 ease-linear"
          href={targetUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Show project
        </a>
        <hr className="border-1 rounded w-full border-secondary my-2" />
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
);

export default ProjectCard;
