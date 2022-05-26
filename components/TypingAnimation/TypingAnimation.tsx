import React, { FC, useEffect, useState } from 'react';

interface TypingAnimationProps {
  words: string [];
  changeAfterMS: number;
  speedInMS: number;
}

const sleep = (durationInMS: number) => (
  // eslint-disable-next-line no-promise-executor-return
  new Promise((resolve) => setTimeout(resolve, durationInMS))
);

// eslint-disable-next-line react/function-component-definition
const TypingAnimation: FC<TypingAnimationProps> = (props) => {
  const { words, changeAfterMS, speedInMS } = props;
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    [...words[0]].forEach(async (char) => {
      await sleep(1000);
      setCurrentWord(currentWord + char);
    });
  }, []);

  return (
    <p>
      {currentWord}
    </p>
  );
};

export default TypingAnimation;
