import React, { FC } from 'react';
import { AiFillGithub, AiFillTwitterCircle, AiFillLinkedin } from 'react-icons/ai/';

/**
 *
 * @returns
 */
const Footer: FC = () => (
  <div className="flex justify-center fixed bottom-0 w-full h-16 m-auto">
    <div className="max-w-3xl w-full">
      <hr className="my-2 w-full mx-auto border-teal-400" />
      <ul className="table align-middle m-auto">
        <li className="table-cell">
          <a
            href="https://github.com/tobias2910"
            className="flex hover:text-teal-400 mx-2 items-center"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="hover:fill-teal-400 mr-1" />
            GitHub
          </a>
        </li>
        <li className="table-cell">
          <a
            href="https://twitter.com/CaliskanTobias"
            className="flex hover:text-teal-400 mx-2 items-center"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterCircle className="hover:fill-teal-400 mr-1" />
            Twitter
          </a>
        </li>
        <li className="table-cell">
          <a
            href="https://www.linkedin.com/in/tobias-caliskan-810323143"
            className="flex mx-2 items-center hover:text-teal-400"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="hover:fill-teal-400 mr-1" />
            LinkedIn
          </a>
        </li>
      </ul>
    </div>
  </div>
);

export default Footer;
