import React from 'react';
import type { NextPage } from 'next';

import TypeWritingEffect from '../components/common/TypeWritingEffect';
import Introduction from '../components/Introduction';
import ArrowDown from '../components/common/ArrowDown';
import SkillOverview from '../components/SkillOverview';

// This is mockup data for the time being, the API is not implemented
const mockupSkills = {
  languages: [
    { id: 123, value: 'CSS' },
    { id: 234, value: 'HTML' },
    { id: 345, value: 'Python' },
    { id: 456, value: 'TypeScript' },
  ],
  frameworks: [
    { id: 567, value: 'Express.js' },
    { id: 568, value: 'Flask' },
    { id: 569, value: 'Flair NLP' },
    { id: 789, value: 'MS Bot Framework' },
    { id: 912, value: 'Next.js' },
    { id: 913, value: 'OpenAPI' },
    { id: 914, value: 'React.js' },
  ],
  technologies: [
    { id: 915, value: 'Cloud' },
    { id: 916, value: 'Docker' },
    { id: 918, value: 'MongoDB' },
    { id: 919, value: 'Nginx' },
    { id: 920, value: 'NodeJS' },
    { id: 922, value: 'RabbitMQ' },
    { id: 921, value: 'SQL' },
    { id: 923, value: 'REST APIs' },
    { id: 924, value: 'Redis' },
  ],
  methodologies: [
    { id: 925, value: 'BPMN' },
    { id: 926, value: 'DevOps' },
    { id: 927, value: 'Scrum' },
  ],
};

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => (
  <div className="z-0">
    <div className="flex-col justify-center w-full h-[95vh]">
      <div className="flex justify-center items-center h-[70%]">
        <TypeWritingEffect
          wordList={['Welcome', 'Bienvenidas', 'Willkommen', 'أهلا بك', 'Bienvenue', '欢迎']}
          typingInterval={100}
          deletingInterval={50}
          pausingDuration={3000}
          className="text-3xl md:text-6xl text-center font-semibold"
        />
      </div>
      <div className="flex justify-center h-min bottom-0">
        <ArrowDown />
      </div>
    </div>
    <div className="grid gap-14">
      <Introduction avatarSource="/avatar.jpeg" />
      <SkillOverview skillData={mockupSkills} />
    </div>
  </div>
);

export default Home;
