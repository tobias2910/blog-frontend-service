import React, { FC } from 'react';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

import Card from '@components/ui/Card';
import { Tag } from 'typings/article';
import Chip from '@components/ui/Chip';

interface BlogCardProps {
  id: number;
  title: string;
  description: string;
  author: string;
  createdAt: string;
  tags: Tag[];
}

const BlogCard: FC<BlogCardProps> = ({
  id,
  title,
  description,
  author,
  createdAt,
  tags,
}) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push(`./blog/${id}`);
  };

  return (
    <Card onClickHandler={handleOnClick}>
      <div className="flex flex-col">
        <div className="w-auto ml-2 h-44 relative">
          <p className="text-lg font-bold underline underline-offset-4 decoration-secondary mb-2">
            {title}
          </p>
          <p className="text-justify">{description}</p>
          <p className="text-xs absolute bottom-0 text-secondary-2">
            Posted by {author} on {createdAt}
          </p>
        </div>
      </div>
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
    </Card>
  );
};

export default BlogCard;
