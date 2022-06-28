import React, { FC } from 'react';
import s from './Responses.module.css';

interface SuccessfulProps {
  text: string;
}

/**
 *
 * @param
 * @returns
 */
const Successful: FC<SuccessfulProps> = ({ text }) => (
  <div className="w-full flex flex-col">
    <svg className={s.body} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle className={s.circle} cx="26" cy="26" r="25" fill="none" />
      <path className={s.check_animate} fill="none" strokeWidth="2" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
    </svg>
    <span className="w-full text-center mt-4">
      {text}
    </span>
  </div>
);

export default Successful;
