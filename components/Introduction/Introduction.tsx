import React, { FC } from 'react';

import Avatar from '../ui/Avatar';
import StyledParagraph from '../ui/StyledParagraph';

interface IntroductionProps {
  avatarSource: string;
}

const Introduction: FC<IntroductionProps> = ({ avatarSource }) => (
  <div className="grid grid-cols-1 grid-flow-row gap-10">
    <p>
      <span className="before:m-fit before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-secondary-2 relative inline-block before:shadow-lg">
        <span className="text-3xl text-secondary font-bold relative">
          About me
        </span>
      </span>
    </p>
    <div className="row-span-1 flex justify-center">
      <Avatar imgSrc={avatarSource} altText="Profile photo" />
    </div>
    <div className="grid gap-5">
      <StyledParagraph>
        My name is
        {' '}
        <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-secondary relative inline-block">
          <span className="text-secondary relative">
            Tobias.
          </span>
        </span>
        {' '}
        Nice to meet you 👋.
      </StyledParagraph>
      <StyledParagraph>
        I&apos;m someone who always loved to build things and found the perfect way of doing
        that in coding. Therefore, I&apos;m working on several projects in my free time and
        try to learn new things and becoming more experienced in the technologies and coding
        languages I use 🧑‍💻.
      </StyledParagraph>
      <StyledParagraph>
        Besides coding, I also love to go biking, traveling and to produce electronic music. Of
        course, eating is also playing a huge role. When I&apos;m not walking through Berlin
        (or other cities) to find new great restaurants, you will find me in the kitchen trying
        out new receipts 🍛.
      </StyledParagraph>
    </div>
  </div>
);

export default Introduction;
