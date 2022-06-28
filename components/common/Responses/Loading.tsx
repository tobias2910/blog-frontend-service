import React, { FC } from 'react';

interface LoadingProps {
  text: string;
}

/**
 *
 * @param
 * @returns
 */
const Loading: FC<LoadingProps> = ({ text }) => (
  <div role="status" className="w-full flex flex-col justify-center items-center">
    <svg
      className="animate-spin w-10 h-10 border-2 rounded-full border-primary border-b-secondary"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 52 52"
    />
    <span className="w-full text-center mt-4">
      {text}
    </span>
  </div>
);

export default Loading;
