import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from './button'

const Cta = () => {
  return (
    <section className='cta-section'>
        <div className='cta-badge'>
            Start learning your way

        </div>
        <h1 className='text-2xl font-bold'>
            Build a Personalize Learning Companion
        </h1>
        <p>
            Pick a name,subject,voice, & personality -and start learning through voice Conversations that feel natural and fun.
        </p>
        <Image src={'/images/cta.svg'} width={300} height={102} alt='plus'/>
        <Link href={'/create'}>
        <Button className='btn-primary'>
            <Image src={'/icons/plus.svg'} width={25} height={25} alt='plus'/>
            <p>Build New Companion</p>

        </Button>
        </Link>
        
      
    </section>
  )
}

export default Cta
