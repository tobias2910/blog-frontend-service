import React, { FC, useEffect, useMemo, useState, useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group'
import s from './SkillOverviewMobile.module.css'

import useOnScreen from '../../lib/hooks/useOnScreen'
import { Skill, SkillData } from '../../typings/skillData'

interface SkillOverviewProps {
  skillData: SkillData
}

const SkillOverviewMobile: FC<SkillOverviewProps> = ({ skillData }) => {
  const skillTableRef = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(skillTableRef)
  const [currentItem, setCurrentItem] = useState(0)

  const itemArray = useMemo(() => {
    const arr: { value: string; experience: string }[] = []
    Object.values(skillData).forEach((value) => {
      value.forEach((el: Skill) => {
        arr.push({
          value: el.value,
          experience: el.experience,
        })
      })
    })

    return arr
  }, [skillData])

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isOnScreen) {
      timer = setTimeout(() => {
        setCurrentItem((prevItem) =>
          prevItem === itemArray.length - 1 ? 0 : prevItem + 1
        )
      }, 1500)
    }

    return () => clearTimeout(timer)
  }, [isOnScreen, currentItem, itemArray])

  const nodeRef = useRef<any>(null)

  const currentCategory = useMemo(() => {
    const category = Object.entries(skillData).find(
      (entry: [string, Skill[]]) =>
        entry[1].some((skill) => skill.value === itemArray[currentItem].value)
    )![0]

    return (
      <span className="rounded outline-none duration-500 px-4 py-2 text-center w-1/2">
        {`${category.charAt(0).toUpperCase()}${category.slice(1)}:`}
      </span>
    )
  }, [skillData, itemArray, currentItem])

  const currentSkill = useMemo(
    () => (
      <SwitchTransition>
        <CSSTransition
          nodeRef={nodeRef}
          key={currentItem}
          classNames={{
            enter: s.enter,
            enterActive: s['enter-active'],
            exit: s.exit,
            exitActive: s['exit-active'],
          }}
          timeout={400}
        >
          <span
            ref={nodeRef}
            className={`rounded text-secondary text-center
        ${
          itemArray[currentItem].experience === 'normal' ? 'bg-secondary' : null
        }
        ${
          itemArray[currentItem].experience === 'high' ? 'bg-secondary-2' : null
        }
        outline-none duration-500 text-left m-auto px-4 py-2`}
          >
            {itemArray[currentItem].value}
          </span>
        </CSSTransition>
      </SwitchTransition>
    ),
    [itemArray, currentItem]
  )

  return (
    <div
      ref={skillTableRef}
      className="flex flex-nowrap text-xl md:text-4xl items-center justify-between py-16 w-full h-full rounded-lg border-2 border-secondary-2"
    >
      {currentCategory}
      {currentSkill}
    </div>
  )
}

export default SkillOverviewMobile
