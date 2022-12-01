import React from 'react'

export const MenuItem = ({ text = '', icon }) => {
  return (
    <div className='flex w-full space-x-4'>
      {icon}
      <span className='text-gray-500 hover:text-gray-700 cursor-pointer'>
        {text}
      </span>
    </div>
  )
}
