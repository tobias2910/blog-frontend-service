import React, { FC, useEffect, useMemo, useState, useRef } from 'react'

import useHover from '../../lib/hooks/useHover'
import useOnScreen from '../../lib/hooks/useOnScreen'
import { Skill, SkillData } from '../../typings/skillData'

interface SkillOverviewProps {
  skillData: SkillData
}

const SkillOverviewMobile: FC<SkillOverviewProps> = ({ skillData }) => {
  const skillTableRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(skillTableRef)
  const isHovered = useHover(skillTableRef)
  const [selectedItem, setSelectedItem] = useState(0)

  const listRefs = useMemo(() => {
    const arrLength = Object.values(skillData).reduce(
      (prev, cur) => prev + cur.length,
      0
    )
    return Array(arrLength).fill(0)
  }, [skillData])

  useEffect(() => {
    let timer: NodeJS.Timeout
    if (isOnScreen && !isHovered) {
      timer = setTimeout(() => {
        const idx = Math.floor(Math.random() * listRefs.length)
        listRefs[idx].focus({ preventScroll: true })
        setSelectedItem(new Date().getTime())
      }, 700)
    }
    return () => clearTimeout(timer)
  }, [listRefs, selectedItem, isOnScreen, isHovered])

  return (
    <div
      ref={skillTableRef}
      className="overflow-y-auto text-xs md:text-2xl flex w-full rounded-lg border-2 border-secondary-2 whitespace-nowrap shadow shadow-secondary-2"
    >
      {Object.entries(skillData).map((entry) => (
        <div
          key={`span_${entry[0]}`}
          className="flex-col w-full text-center py-2 px-4"
        >
          <span className="underline decoration-secondary font-bold">
            {entry[0].charAt(0).toUpperCase() + entry[0].slice(1)}
          </span>
          <ul>
            {entry[1].map((el: Skill) => (
              <li
                key={el.id}
                tabIndex={-1}
                ref={(skill: HTMLLIElement) => {
                  listRefs[listRefs.findIndex((item) => item === 0)] = skill
                }}
                className={`rounded hover:text-secondary focus:text-secondary
                  ${
                    el.experience === 'normal'
                      ? 'hover:bg-secondary focus:bg-secondary'
                      : null
                  }
                  ${
                    el.experience === 'high'
                      ? 'hover:bg-secondary-2 focus:bg-secondary-2'
                      : null
                  }
                  outline-none duration-500 py-1`}
              >
                {el.value}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default SkillOverviewMobile
