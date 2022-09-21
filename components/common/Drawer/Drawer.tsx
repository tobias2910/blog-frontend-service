import React, { FC, forwardRef, Ref } from 'react'
import NavigationItems from '../NavigationItems'

interface DrawerProps {
  isOpen: boolean
  navItems: string[]
  ref?: Ref<HTMLDivElement>
}

const Drawer: FC<DrawerProps> = forwardRef(
  ({ isOpen, navItems }, forwardedRef) => (
    <div className="w-40 fixed flex md:hidden z-[1]">
      {isOpen ? (
        <div
          ref={forwardedRef}
          className="h-screen backdrop-blur-md animate-fadeIn-left"
        >
          <NavigationItems alignment="left" items={navItems} />
        </div>
      ) : null}
    </div>
  )
)

export default Drawer
