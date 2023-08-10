"use client"
import React from 'react'
import Resizable from './Carousel'
import ResizableMobile from './CarouselMobile'
import Link from 'next/link'

const Homepage = () => {

    return (
  
      <main className="min-h-screen relative top-20 flex flex-col items-center overflow-hidden">
  
          {/* section 1 : red rising */}
          <section className="red_rising_img h-[75vh] w-full flex flex-col items-center justify-center sm:hidden">
            <h1 className="text-7xl font-bold text-white brightness-[1]">RED RISING</h1>
          </section>

          {/* section 1 mobile version : women*/}
          <Link href='/women'>
            <section className="h-[35vh] w-full flex flex-col items-center justify-center md:hidden relative pb-1">
              <img className='h-full w-full brightness-[0.8]' src="https://ilarge.lisimg.com/image/1326863/1118full-elyse-taylor.jpg"></img>
              <div className='absolute flex flex-col items-center justify-center gap-2'>
                <h1 className="font-bold text-white sm:text-2xl brightness-[1]">Women</h1> 
                <p className='underline sm:text-[0.6rem] text-white'>Discover more</p>
              </div>
            </section>
          </Link>
  
          {/* section 2 : image group */}
          <Link href='/women'>
            <section className="grid h-[160vh] w-screen grid-cols-4 grid-rows-2 gap-[1px] pt-[1px] relative m-0 sm:hidden">
              <div className="casual_img col-start-1 col-end-4 relative cursor-pointer flex flex-col items-center justify-center gap-2">
                <p className="text-6xl text_font text-white">Casual</p>
                <button className="w-fit bg-none text-white border-b border-white text_font text-[0.7rem] font-bold">DISCOVER MORE</button>
              </div>
  
              <div className="relative cursor-pointer flex flex-col items-center justify-center professional_img gap-2 ">
                <p className="text-4xl text_font text-white">Professional</p>
                <button className="w-fit bg-none text-white border-b border-white text_font text-[0.7rem] font-bold">DISCOVER MORE</button>
              </div>
  
              <div className="relative cursor-pointer border flex flex-col items-center justify-center classy_img gap-2">
                <p className="text-5xl text_font text-white">Classy</p>
                <button className="w-fit bg-none text-white border-b border-white text_font text-[0.7rem] font-bold">DISCOVER MORE</button>
              </div>
  
              <div className="relative cursor-pointer col-start-2 col-end-5 flex flex-col items-center justify-center sporty_img gap-2">
                <p className="text-5xl text_font text-white">Sporty</p>
                <button className="w-fit bg-none text-white border-b border-white text_font text-[0.7rem] font-bold">DISCOVER MORE</button>
              </div>
          </section>
          </Link>

            {/* section 2 mobile version: men*/}
            <Link href='/men'>
            <section className="h-[35vh] w-full flex flex-col items-center justify-center md:hidden relative">
              <img className='h-full w-full brightness-[0.8]' src="https://brand-mag.com/wp-content/uploads/DwHxS0aWwAEqgBp.jpg"></img>
              <div className='absolute flex flex-col items-center justify-center gap-2'>
                <h1 className="font-bold text-white sm:text-2xl brightness-[1]">Men</h1> 
                <p className='underline sm:text-[0.6rem] text-white'>Discover more</p>
              </div>
           </section>
           </Link>
  
            {/*section 3: Coming Soon*/}
            <section className='mt-24 sm:hidden'>
              <h1 className="w-full text-center text-7xl font-bold pb-12 sm:text-5xl">Coming Soon</h1>
              <Resizable/>
            </section>

            {/*section 3 mobile version*/}
            <section className='mt-14 md:hidden flex flex-col items-center pb-8'>
              <h1 className="w-full text-center text-5xl font-bold pb-12">Coming Soon</h1>
              <ResizableMobile/>
            </section>
  
          {/* section 4: go sporty */}
          <section className="h-[60vh] w-[80vw] flex flex-row justify-center items-start pb-16 text_font mt-28 sm:mt-0 sm:flex-col sm:items-center sm:w-full sm:pb-2 sm:h-[80vh] sm:gap-4">
              <div className="w-5/6 h-full flex flex-col justify-end items-left gap-8 sm:justify-center">
                  <p className="text-gray-800 text-4xl sm:text-2xl">Go Sporty</p>
                  <p className="text-6xl font-bold sm:text-3xl">Shop the look</p>
                  <p className="text-gray-600 text-xl w-10/12 sm:text-base sm:w-full">With personalized outfit inspiration, you can save time and find the perfect look for any occasion.</p>
                  <Link href='/men'><button className="w-fit bg-black text-white border-0 rounded px-8 py-4 hover:scale-[1.01]">Shop Now</button></Link>
              </div>
  
              <div className="w-3/6 h-full flex justify-center items-end relative sm:w-4/6 sm:h-4/6">
                <img className="absolute h-4/6 top-0 md:left-8 absolute shadow-2xl sm:right-0" src="https://lb.mikesport.com/cdn/shop/products/de8d5c3c259245e89598fcde07174ae4.png?v=1689306938&width=320"/>
                <img className="absolute h-4/6 top-0 md:right-8 absolute shadow-2xl sm:left-0" src="https://lb.mikesport.com/cdn/shop/products/cacda66ae1c927a592ec07cc3fadc194.png?v=1677902634&width=360"/>
                <img className="absolute h-4/6 absolute shadow-2xl" src="https://lb.mikesport.com/cdn/shop/products/5febb4cbc09961e1e734475ddff7a777.png?v=1671503682&width=560"/>
              </div>
          </section>
      </main>
    )
}

export default Homepage