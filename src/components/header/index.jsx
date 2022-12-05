import React from 'react'

import { ReactComponent as LogoIcon } from '../../images/logo.svg'
import { NavItem } from '../nav-item'
import { NavMenu } from '../nav-menu'
import { ЛИЧНЫЙКАБИНЕТ } from '../header/constants'

export const Header = () => {
  return (
    <header className='flex justify-between items-center'>
      <LogoIcon />
      <nav className='flex space-x-6 ml-8 items-center'>
        <NavItem text='Контакты' />
        <NavItem text='Личный кабинет'>
          <NavMenu items={ЛИЧНЫЙКАБИНЕТ} />
        </NavItem>
      </nav>
    </header>
  )
}
