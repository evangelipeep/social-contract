import React from 'react'
import { MenuItem } from '../menu-item'

export const NavMenu = ({ items = [] }) => {
  return (
    <div className='flex flex-col px-4 py2 bg-slate-100 drop-shadow rounded-lg absolute top-10 right-0 w-30 space-y-2 z-30 '>
      {items.map(({ text, icon }) => (
        <MenuItem key={text} text={text} icon={icon} />
      ))}
    </div>
  )
}
