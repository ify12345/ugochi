import React from 'react'
import NavBar from '../components/landing/NavBar'
import Hero from '../components/landing/Hero'
import { Why } from '../components/landing/Why'
import { Testimonial } from '../components/landing/Testimonial'
import { How } from '../components/landing/How'

export default function Landing(){
  return (
    <div className='flex flex-col gap-10 overflow-x-hidden'>
        <NavBar/>
        <Hero/>
        <Why/>
        <Testimonial/>
        <How/>
    </div>
  )
}

