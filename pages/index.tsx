import React from 'react';
import type { NextPage } from 'next';

import TypeWritingEffect from '../components/common/TypeWritingEffect';
import Introduction from '../components/Introduction';
import ArrowDown from '../components/common/ArrowDown';
import { SkillData } from '../typings/skillData';
import SkillOverviewMobile from '../components/SkillOverviewMobile';
import SkillOverviewDesktop from '../components/SkillOverviewDesktop';
import StyledParagraph from '../components/ui/StyledParagraph';
import useMediaQuery from '../lib/hooks/useMediaQuery';

// This is mockup data for the time being, the API is not implemented
const mockupSkills: SkillData = {
  languages: [
    { id: 123, value: 'CSS', experience: 'high' },
    { id: 234, value: 'HTML', experience: 'high' },
    { id: 345, value: 'Python', experience: 'normal' },
    { id: 456, value: 'TypeScript', experience: 'high' },
  ],
  frameworks: [
    { id: 567, value: 'Express.js', experience: 'high' },
    { id: 568, value: 'Flask', experience: 'normal' },
    { id: 569, value: 'Flair NLP', experience: 'normal' },
    { id: 789, value: 'Bot Framework', experience: 'high' },
    { id: 912, value: 'Next.js', experience: 'high' },
    { id: 913, value: 'OpenAPI', experience: 'high' },
    { id: 914, value: 'React.js', experience: 'high' },
  ],
  technologies: [
    { id: 915, value: 'Cloud', experience: 'high' },
    { id: 916, value: 'Docker', experience: 'high' },
    { id: 918, value: 'MongoDB', experience: 'high' },
    { id: 919, value: 'Nginx', experience: 'high' },
    { id: 920, value: 'NodeJS', experience: 'high' },
    { id: 922, value: 'RabbitMQ', experience: 'high' },
    { id: 921, value: 'SQL', experience: 'high' },
    { id: 923, value: 'REST APIs', experience: 'high' },
    { id: 924, value: 'Redis', experience: 'normal' },
  ],
  methodologies: [
    { id: 925, value: 'BPMN', experience: 'high' },
    { id: 926, value: 'DevOps', experience: 'normal' },
    { id: 927, value: 'Scrum', experience: 'normal' },
  ],
};

// eslint-disable-next-line react/function-component-definition
const Home: NextPage = () => {
  const isSmallMediaQuery = useMediaQuery('sm');

  return (
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
        <div className="grid gap-10">
          <p>
            <span className="before:block before:absolute before:-inset-2 before:-skew-y-3 before:bg-secondary-2 relative inline-block">
              <span className="text-3xl text-secondary font-bold relative">
                My skills
              </span>
            </span>
          </p>
          <div className="grid gap-5">
            <StyledParagraph>
              Over the last few years I worked on several projects during my studies, in my daily
              work life as well as in my free time. This allowed me to collect and build experience
              in different technologies, frameworks and methodologies 👨‍🎓.
            </StyledParagraph>
            <StyledParagraph>
              Here is a summary of the most important ones:
            </StyledParagraph>
          </div>
          {!isSmallMediaQuery
            ? <SkillOverviewDesktop skillData={mockupSkills} />
            : <SkillOverviewMobile skillData={mockupSkills} />}
          <div className="flex justify-center items-center -mt-5">
            <svg className=" w-4 h-4 rounded bg-secondary mr-2">
              <rect />
            </svg>
            <span className="mr-5">
              Experienced
            </span>
            <svg className="ml-2 w-4 h-4 rounded bg-secondary-2 mr-2">
              <rect />
            </svg>
            <span>
              Highly experienced
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
