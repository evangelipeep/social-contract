import React from 'react'
import { Button } from '../button'
import { ReactComponent as Arrow } from '../../images/arrow.svg'
import { ReactComponent as LogoV } from '../../images/vector-logo.svg'

export const MainSection = () => {
  return (
    <section className='w-full flex my-40 items-center justify-center'>
      <div className='text-center  mt-12'>
        <LogoV className='m-auto' />
        <h1 className='text-6xl font-black'>Разработайте бизнес-план</h1>
        <h1 className='text-5xl font-black mb-10'>
          Начните своё дело прямо сейчас !
        </h1>

        <Button isFilled={true}>ПОЕХАЛИ</Button>
        <Arrow className=' mt-20 m-auto' />
      </div>
    </section>
  )
}
