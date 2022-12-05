import React from 'react'

const borderStyles =
  'border-2 border-my-green hover:border-my-green-2 rounded-lg'
const filledStyles =
  'bg-my-green rounded-lg font-bold py-4 px-6 mx-0 hover:bg-my-green-2 hover:text-white'

export const Button = ({
  children = '',
  hasBorder = false,
  isFilled = false,
}) => {
  return (
    <button
      className={`text-black px-5 py-2 ${hasBorder && borderStyles} ${
        isFilled && filledStyles
      }`}
    >
      {children}
    </button>
  )
}
