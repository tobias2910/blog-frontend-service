import React from 'react';
import { InferGetStaticPropsType } from 'next';

import fetchData from 'utils/api/fetchData';
import TypeWritingEffect from '@components/common/TypeWritingEffect';
import Introduction from '@components/Introduction';
import ArrowDown from '@components/common/ArrowDown';
import SkillOverviewMobile from '@components/SkillOverviewMobile';
import SkillOverviewDesktop from '@components/SkillOverviewDesktop';
import StyledParagraph from '@components/ui/StyledParagraph';
import groupArray from 'utils/groupArray';
import useMediaQuery from 'utils/hooks/useMediaQuery';

import { GroupedSkills, Skill } from '../typings/skill';

export const getStaticProps = async () => {
  const skills = await fetchData<Skill[]>('skills');

  const skillsGrouped: GroupedSkills = groupArray(skills, 'category');

  return {
    props: {
      skills: skillsGrouped,
    },
    revalidate: 6000,
  };
};

const Home = ({ skills }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const isSmallMediaQuery = useMediaQuery('sm');

  return (
    <article className="z-0">
      <div className="flex-col justify-center w-full h-[95vh]">
        <div className="flex justify-center items-center h-[70%]">
          <TypeWritingEffect
            wordList={[
              'Welcome',
              'Bienvenidas',
              'Willkommen',
              'أهلا بك',
              'Bienvenue',
              '欢迎',
            ]}
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
              Over the last few years I worked on several projects during my
              studies, in my daily work life as well as in my free time. This
              allowed me to collect and build experience in different
              technologies, frameworks and methodologies 👨‍🎓.
            </StyledParagraph>
            <StyledParagraph>
              Here is a summary of the most important ones:
            </StyledParagraph>
          </div>
          {!isSmallMediaQuery ? (
            <SkillOverviewDesktop skillData={skills} />
          ) : (
            <SkillOverviewMobile skillData={skills} />
          )}
          <div className="flex justify-center items-center -mt-5">
            <svg className=" w-4 h-4 rounded bg-secondary mr-2">
              <rect />
            </svg>
            <span className="mr-5">Experienced</span>
            <svg className="ml-2 w-4 h-4 rounded bg-secondary-2 mr-2">
              <rect />
            </svg>
            <span>Highly experienced</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Home;
