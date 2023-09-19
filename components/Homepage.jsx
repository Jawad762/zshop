"use client"
import React from 'react'
import Resizable from './Carousel'
import ResizableMobile from './CarouselMobile'
import Link from 'next/link'

const Homepage = () => {

    return (
  
      <main className="relative flex flex-col items-center min-h-screen overflow-hidden top-20">
  
          {/* section 1 : red rising */}
          <section className="red_rising_img lg:h-[75vh] md:h-[35vh] w-full flex flex-col items-center justify-center sm:hidden">
            <h1 className="text-7xl font-bold text-white brightness-[1]">RED RISING</h1>
          </section>

          {/* section 1 mobile version : women*/}
          <Link href='/women' className='w-full'>
            <section className="h-[35vh] sm:h-[45vh]  w-full flex flex-col items-center justify-center md:hidden relative">
              <img className='h-full w-full brightness-[0.8]' src="https://ilarge.lisimg.com/image/1326863/1118full-elyse-taylor.jpg"></img>
              <div className='absolute flex flex-col items-center justify-center gap-2'>
                <h1 className="font-bold text-white sm:text-2xl brightness-[1]">Women</h1> 
                <p className='underline sm:text-[0.6rem] text-white'>Discover more</p>
              </div>
            </section>
          </Link>
  
          {/* section 2 : image group */}
          <Link href='/women'>
            <section className="grid lg:h-[160vh] md:h-[55vh] w-screen grid-cols-4 grid-rows-2 gap-[1px] pt-[1px] relative m-0 sm:hidden">
              <div className="relative flex flex-col items-center justify-center col-start-1 col-end-4 gap-2 cursor-pointer casual_img">
                <p className="text-6xl text-white text_font">Casual</p>
                <button className="w-fit bg-none text-white border-b border-white text_font text-[0.7rem] font-bold">DISCOVER MORE</button>
              </div>
  
              <div className="relative flex flex-col items-center justify-center gap-2 cursor-pointer professional_img ">
                <p className="text-white md:text-2xl lg:text-4xl text_font">Professional</p>
                <button className="w-fit bg-none text-white border-b border-white text_font text-[0.7rem] font-bold">DISCOVER MORE</button>
              </div>
  
              <div className="relative flex flex-col items-center justify-center gap-2 border cursor-pointer classy_img">
                <p className="text-5xl text-white text_font">Classy</p>
                <button className="w-fit bg-none text-white border-b border-white text_font text-[0.7rem] font-bold">DISCOVER MORE</button>
              </div>
  
              <div className="relative flex flex-col items-center justify-center col-start-2 col-end-5 gap-2 cursor-pointer sporty_img">
                <p className="text-5xl text-white text_font">Sporty</p>
                <button className="w-fit bg-none text-white border-b border-white text_font text-[0.7rem] font-bold">DISCOVER MORE</button>
              </div>
          </section>
          </Link>

            {/* section 2 mobile version: men*/}
            <Link href='/men' className='w-full'>
            <section className="h-[35vh] sm:h-[45vh] w-full flex flex-col items-center justify-center md:hidden relative">
              <img className='h-full w-full brightness-[0.8]' src="https://brand-mag.com/wp-content/uploads/DwHxS0aWwAEqgBp.jpg"></img>
              <div className='absolute flex flex-col items-center justify-center gap-2'>
                <h1 className="font-bold text-white sm:text-2xl brightness-[1]">Men</h1> 
                <p className='underline sm:text-[0.6rem] text-white'>Discover more</p>
              </div>
           </section>
           </Link>
  
            {/*section 3: Coming Soon*/}
            <section className='mt-24 sm:hidden'>
              <h1 className="w-full pb-12 font-bold text-center text-7xl sm:text-5xl">Coming Soon</h1>
              <Resizable/>
            </section>

            {/*section 3 mobile version*/}
            <section className='flex flex-col items-center pb-8 mt-14 md:hidden'>
              <h1 className="w-full pb-12 text-5xl font-bold text-center">Coming Soon</h1>
              <ResizableMobile/>
            </section>
  
          {/* section 4: go sporty */}
          <section className="h-[60vh] w-[80vw] flex flex-row justify-center items-start pb-16 text_font mt-28 sm:mt-0 sm:flex-col sm:items-center sm:w-full sm:pb-2 sm:h-[80vh] sm:gap-4">
              <div className="flex flex-col justify-end w-5/6 h-full gap-8 items-left sm:justify-center">
                  <p className="text-4xl text-gray-800 sm:text-2xl">Go Sporty</p>
                  <p className="text-6xl font-bold sm:text-3xl">Shop the look</p>
                  <p className="w-10/12 text-xl text-gray-600 sm:text-base sm:w-full">With personalized outfit inspiration, you can save time and find the perfect look for any occasion.</p>
                  <Link href='/men'><button className="w-fit bg-black text-white border-0 rounded px-8 py-4 hover:scale-[1.01]">Shop Now</button></Link>
              </div>
  
              <div className="relative flex items-end justify-center w-3/6 h-full sm:w-4/6 sm:h-4/6">
                <img className="absolute top-0 shadow-2xl h-4/6 sm:right-10 md:right-16 lg:right-0" src="https://lb.mikesport.com/cdn/shop/products/de8d5c3c259245e89598fcde07174ae4.png?v=1689306938&width=320"/>
                <img className="absolute top-0 shadow-2xl h-4/6 sm:left-10 md:left-16 lg:left-0" src="https://lb.mikesport.com/cdn/shop/products/cacda66ae1c927a592ec07cc3fadc194.png?v=1677902634&width=360"/>
                <img className="absolute shadow-2xl h-4/6" src="https://lb.mikesport.com/cdn/shop/products/5febb4cbc09961e1e734475ddff7a777.png?v=1671503682&width=560"/>
              </div>
          </section>
      </main>
    )
}

export default Homepage