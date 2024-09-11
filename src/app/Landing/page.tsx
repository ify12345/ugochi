"use client"
import React from 'react'
import NavBar from '../components/landing/NavBar'
import Hero from '../components/landing/Hero'
import { Why } from '../components/landing/Why'
import { Testimonial } from '../components/landing/Testimonial'
import { How } from '../components/landing/How'
import { Request } from '../components/landing/Request'
import { Footer } from '../components/landing/Footer'

export default function Landing(){
  return (
    <div className='flex flex-col gap-10 overflow-x-hidden'>
        <NavBar/>
        <Hero/>
        <Why/>
        <Testimonial/>
        <How/>
        <Request/>
        <Footer/>
    </div>
  )
}

