import React, { FC } from 'react';
import { Skill, SkillData } from '../../typings/skillData';

import StyledParagraph from '../ui/StyledParagraph';

interface SkillOverviewProps {
  skillData: SkillData;
}

const SkillOverview: FC<SkillOverviewProps> = ({ skillData }) => (
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
        Over the last few years I worked in several projects during my studies, in my daily work
        life as well as in my free time. This allowed my to collect and build experience in
        different technologies, frameworks and methodologies 👨‍🎓.
      </StyledParagraph>
      <StyledParagraph>
        Here is a summary of the most important ones:
      </StyledParagraph>
    </div>
    <div className="overflow-x-auto text-xl md:text-2xl flex w-full rounded-lg border-2 border-secondary-2 whitespace-nowrap shadow shadow-secondary-2">
      {
          Object.entries(skillData).map((entry) => (
            <div key={`span_${entry[0]}`} className="flex-col w-full text-center py-2 px-4">
              <span className="underline decoration-secondary font-bold">
                {entry[0].charAt(0).toUpperCase() + entry[0].slice(1)}
              </span>
              <ul>
                {
              entry[1].map((el: Skill) => (
                <li key={el.id} className="rounded hover:text-secondary hover:bg-secondary duration-150 py-1">
                  {el.value}
                </li>
              ))
           }
              </ul>
            </div>
          ))
        }
    </div>
  </div>
);

export default SkillOverview;
