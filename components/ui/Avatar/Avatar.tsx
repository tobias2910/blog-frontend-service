import React, { FC } from 'react'
import Image from 'next/image'

interface AvatarProps {
  imgSrc: string
  altText: string
}

const Avatar: FC<AvatarProps> = (props) => {
  const { imgSrc, altText } = props

  return (
    <div className="relative rounded-full w-40 h-40 md:w-60 md:h-60 p-12 m-4 ring ring-secondary ring-offset-4 ring-offset-primary">
      <Image
        src={imgSrc}
        alt={altText}
        layout="fill"
        objectFit="cover"
        priority
        className="rounded-full"
      />
    </div>
  )
}

export default Avatar
