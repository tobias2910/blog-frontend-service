import React, {
  FC,
  useEffect,
  useMemo,
  useState,
  useRef,
} from 'react';
import useHover from '../../lib/hooks/useHover';
import useOnScreen from '../../lib/hooks/useOnScreen';
import { Skill, SkillData } from '../../typings/skillData';

import StyledParagraph from '../ui/StyledParagraph';

interface SkillOverviewProps {
  skillData: SkillData;
}

const SkillOverview: FC<SkillOverviewProps> = ({ skillData }) => {
  const skillTableRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(skillTableRef);
  const isHovered = useHover(skillTableRef);
  const [selectedItem, setSelectedItem] = useState(0);

  const listRefs = useMemo(() => {
    const arrLength = Object.values(skillData)
      .reduce(((prev, cur) => prev + cur.length), 0);
    return Array(arrLength).fill(0);
  }, [skillData]);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isOnScreen && !isHovered) {
      timer = setTimeout(() => {
        const idx = (Math.floor(Math.random() * listRefs.length));
        listRefs[idx].focus({ preventScroll: true });
        setSelectedItem(new Date().getTime());
      }, 800);
    }
    return () => clearTimeout(timer);
  }, [listRefs, selectedItem, isOnScreen, isHovered]);

  return (
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
          Over the last few years I worked on several projects during my studies, in my daily work
          life as well as in my free time. This allowed my to collect and build experience in
          different technologies, frameworks and methodologies 👨‍🎓.
        </StyledParagraph>
        <StyledParagraph>
          Here is a summary of the most important ones:
        </StyledParagraph>
      </div>
      <div ref={skillTableRef} className="overflow-x-auto text-xl md:text-2xl flex w-full rounded-lg border-2 border-secondary-2 whitespace-nowrap shadow shadow-secondary-2">
        {
          Object.entries(skillData).map((entry) => (
            <div key={`span_${entry[0]}`} className="flex-col w-full text-center py-2 px-4">
              <span className="underline decoration-secondary font-bold">
                {entry[0].charAt(0).toUpperCase() + entry[0].slice(1)}
              </span>
              <ul>
                {
              entry[1].map((el: Skill) => (
                <li
                  key={el.id}
                  tabIndex={-1}
                  ref={(skill: HTMLLIElement) => {
                    listRefs[listRefs.findIndex((item) => item === 0)] = skill;
                  }}
                  className={`rounded hover:text-secondary focus:text-secondary
                    ${el.experience === 'normal' ? 'hover:bg-secondary focus:bg-secondary' : null}
                    ${el.experience === 'high' ? 'hover:bg-secondary-2 focus:bg-secondary-2' : null}
                    outline-none duration-500 py-1`}
                >
                  {el.value}
                </li>
              ))
          }
              </ul>
            </div>
          ))
          }
      </div>
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
          High experienced
        </span>
      </div>
    </div>
  );
};

export default SkillOverview;
