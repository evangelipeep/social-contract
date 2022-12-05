import React from 'react'

export const Wrapper = ({ children }) => {
  return (
    <div className='container mx-auto px-2 py-4 min-h-screen'>{children}</div>
  )
}
