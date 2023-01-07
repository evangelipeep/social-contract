import React from 'react'
import { motion } from 'framer-motion'
import LogoIcon from '../../images/logo.svg'

import { NavItem } from '../nav-item'
import { NavMenu } from '../nav-menu'
import { ЛИЧНЫЙКАБИНЕТ } from '../header/constants'

export const Header = () => {
  const pVariants = {
    hidden: {
      x: -10,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 100,
    },
  }
  return (
    <header className='flex justify-between items-center'>
      <motion.img
        src={LogoIcon}
        initial={'hidden'}
        animate={'visible'}
        transition={{
          delay: 0.5,
          duration: 0.5,
        }}
        variants={pVariants}
      />
      <nav className='flex space-x-6 ml-8 items-center'>
        <NavItem text='Контакты' />
        <NavItem text='Личный кабинет'>
          <NavMenu items={ЛИЧНЫЙКАБИНЕТ} />
        </NavItem>
      </nav>
    </header>
  )
}
