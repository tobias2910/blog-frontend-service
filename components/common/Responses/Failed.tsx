import React, { FC } from 'react';
import s from './Responses.module.css';

interface FailedProps {
  text: string;
}

const Failed: FC<FailedProps> = ({ text }) => (
  <div className="w-full flex flex-col">
    <svg className={s.body} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
      <circle className={s.circle} cx="26" cy="26" r="25" fill="none" />
      <polyline className={s.failure_animate} strokeWidth="2" points="12,12 40,40" />
      <polyline className={s.failure_animate} strokeWidth="2" points="40,12 12,40" />
    </svg>
    <span className="w-full text-center mt-4">
      {text}
    </span>
  </div>
);

export default Failed;
