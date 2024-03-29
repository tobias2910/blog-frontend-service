import React, { FC, forwardRef, Ref } from 'react'

import ThemeSwitcher from '../../ui/ThemeSwitcher'
import DrawerToggle from '../../ui/DrawerToggle'
import NavigationItems from '../NavigationItems'

interface NavbarProps {
  navbarItems: string[]
  drawerIsOpen: boolean
  handleDrawerToggle: () => void
  ref?: Ref<HTMLDivElement>
}

const Navbar: FC<NavbarProps> = forwardRef(
  ({ navbarItems, drawerIsOpen, handleDrawerToggle }, forwardedRef) => (
    <div className="h-16 z-[100] relative">
      <nav
        ref={forwardedRef}
        className="backdrop-blur-md flex justify-center fixed top-0 w-full"
      >
        <div className="max-w-3xl w-full">
          <div className="flex w-full">
            <NavigationItems items={navbarItems} alignment="middle" />
            <div className="my-3 mx-2 block md:hidden">
              <DrawerToggle
                handleClick={handleDrawerToggle}
                isOpen={drawerIsOpen}
              />
            </div>
            <div className="my-3 mx-2 w-full h-full flex justify-end md:w-fit">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
)

export default Navbar
