"use client"
import React, { useContext } from 'react'
import { HiOutlineShoppingCart } from "react-icons/hi";
import { HiOutlineSearch } from "react-icons/hi";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Context } from '@/app/layout';

const Navbar = () => {
  const pathName= usePathname()
  const {showInput, setShowInput,setShowModal, cartProducts, setText, handleSubmit} = useContext(Context)

  return (
    <main className='fixed z-10 h-20 w-screen flex justify-between items-center border-b border-gray bg-white z-1 overflow-hidden sm:justify-around'>

        <section className='flex gap-6 justify-start w-1/3 pl-8 sm:hidden'>
            <Link href='/'><p onClick={() => {setShowModal(false)}} className={`text-sm cursor-pointer ${pathName == '/' && 'border-b-2 border-black'}`}>Home</p></Link>
            <Link href='/women'><p onClick={() => {setShowModal(false)}} className={`text-sm cursor-pointer ${pathName == '/women' && 'border-b-2 border-black'}`}>Women</p></Link>
            <Link href='/men'><p onClick={() => {setShowModal(false)}} className={`text-sm cursor-pointer ${pathName == '/men' && 'border-b-2 border-black'}`}>Men</p></Link>
        </section>

        <h1 className='text-3xl logo_font text-center w-fit sm:text-left'>Z-SHOP</h1>

        <section className='flex justify-end items-center w-1/3 sm:w-1/2 h-1/2 pr-12 pb-2 sm:pr-0 mt-2 '>
            {showInput && (
                <form onSubmit={(event) => handleSubmit(event)}>
                    <input placeholder='Search...' className='outline-none border-b border-gray sm:w-20' onChange={(event) => setText(event.target.value)}></input>
                </form>
            )}
            <div className='flex flex-col items-center justify-center gap-1 cursor-pointer relative h-10 w-10' onClick={() => {
                if (pathName === '/') alert('Please head to the shopping section of your choice first.')
                else setShowInput(prev => !prev)
            }}>
                <HiOutlineSearch className='scale-[1.3] p-0 m-0'/>
            </div>
            <div className='flex flex-col items-center justify-center gap-1 cursor-pointer relative h-10 w-10'>
                <Link href='/checkout' onClick={() => setShowModal(false)}><HiOutlineShoppingCart className='scale-[1.3] p-0 m-0'/></Link>
                {cartProducts.length > 0 && (<div className='h-4 w-4 absolute top-0 right-0 rounded-full bg-black text-white flex justify-center items-center text-[0.7rem]'>{cartProducts.length}</div>)}
            </div>
        </section>

    </main>
  )
}

export default Navbar