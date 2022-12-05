import React from 'react'
import { Button } from '../button'

export const MainSection = () => {
  return (
    <section className='w-full flex mt-6'>
      <div className=' ml-auto flex space-x-5'>
        <Button>ПОЕХАЛИ</Button>
        <Button hasBorder={true}>ПОЕХАЛИ</Button>
        <Button isFilled={true}>ПОЕХАЛИ</Button>
      </div>
    </section>
  )
}
