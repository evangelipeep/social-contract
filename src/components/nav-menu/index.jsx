import React from 'react'
import { MenuItem } from '../menu-item'

export const NavMenu = ({ items = [] }) => {
  return (
    <div className='flex flex-col px-4 py-2 bg-my-green drop-shadow rounded-lg absolute top-10 right-0 w-25 space-y-2 z-30 '>
      {items.map(({ text }) => (
        <MenuItem key={text} text={text} />
      ))}
    </div>
  )
}
