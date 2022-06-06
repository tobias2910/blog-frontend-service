import React, { FC } from 'react';
import Image from 'next/image';

interface AvatarProps {
  imgSrc: string;
}

const Avatar: FC<AvatarProps> = (props) => {
  const { imgSrc } = props;

  return (
    <div className="rounded-full w-40 h-40 border-4 border-teal-400 flex justify-center items-center shadow shadow-teal-400">
      <Image src={imgSrc} width="160px" height="160px" className="rounded-full" />
    </div>
  );
};

export default Avatar;
