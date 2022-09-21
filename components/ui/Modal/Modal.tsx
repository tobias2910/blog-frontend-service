import React, { FC, ReactNode, useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { clearAllBodyScrollLocks, disableBodyScroll } from 'body-scroll-lock'
import { XIcon } from '@heroicons/react/solid'

import ClickAwayListener from '../../common/ClickAwayListener'

interface ModalProps {
  children: ReactNode
  handleClose: () => void
}

const Modal: FC<ModalProps> = ({ handleClose, children }) => {
  const innerRef = useRef<HTMLDivElement>(null)

  const handleKeyDownEvent = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      handleClose()
    }
  }

  useEffect(() => {
    if (innerRef.current) {
      disableBodyScroll(innerRef.current, { reserveScrollBarGap: true })
      window.addEventListener('keydown', handleKeyDownEvent)
    }

    return () => {
      clearAllBodyScrollLocks()
      window.removeEventListener('keydown', handleKeyDownEvent)
    }
  })

  return createPortal(
    <div className="flex justify-center items-center fixed inset-0 h-screen w-screen backdrop-blur">
      <ClickAwayListener onOutsideClick={handleClose}>
        <div
          ref={innerRef}
          role="dialog"
          className="grid grid-rows-6 max-h-80 h-3/6 p-3 w-screen mx-4 lg:w-1/3 lg:h-1/3 bg-primary rounded border-2 border-secondary-2"
        >
          <div className="row-span-1 flex h-full w-full items-start justify-end">
            <button
              className="rounded-full border-2 border-secondary p-1 group-hover:border-secondary-2 duration-300"
              aria-label="Close window"
              tabIndex={0}
              type="button"
              onClick={handleClose}
              title="Close window"
            >
              <XIcon className="w-5 h-5 fill-secondary" />
            </button>
          </div>
          <div className="row-span-5 w-full flex justify-center items-center">
            {children}
          </div>
        </div>
      </ClickAwayListener>
    </div>,
    document.body
  )
}

export default Modal
