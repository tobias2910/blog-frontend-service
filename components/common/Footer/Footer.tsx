import React, { FC } from 'react'
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from 'react-icons/ai/'

import IconLink from '../../ui/IconLink'

/**
 *
 * @returns
 */
const Footer: FC = () => (
  <div className="flex justify-center sticky bottom-0 w-full h-16 m-auto backdrop-blur-md z-[1]">
    <div className="max-w-sm md:max-w-3xl w-full">
      <hr className="my-2 w-full mx-auto border-secondary" />
      <ul className="table align-middle m-auto">
        <li className="table-cell">
          <IconLink
            Icon={AiFillGithub}
            Text="GitHub"
            href="https://github.com/tobias2910"
          />
        </li>
        <li className="table-cell">
          <IconLink
            Icon={AiFillLinkedin}
            Text="LinkedIn"
            href="https://www.linkedin.com/in/tobias-caliskan-810323143"
          />
        </li>
        <li className="table-cell">
          <IconLink
            Icon={AiFillTwitterCircle}
            Text="Twitter"
            href="https://twitter.com/CaliskanTobias"
          />
        </li>
      </ul>
    </div>
  </div>
)

export default Footer
