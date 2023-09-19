import React, { useContext } from 'react'
import { Context } from '@/app/layout'


const Modal = () => {
const {currentProduct, setShowModal, handleAddToCart, handleSizeClick} = useContext(Context)

  return (
    <main className='fixed z-10 flex items-center justify-center w-screen h-screen shadow-2xl top-20 bg-none sm:top-10'>
        {currentProduct && (
            <section className='lg:h-[70vh] lg:w-[55vw] md:w-full md:h-[60vh] shadow-2xl flex justify-center items-center bg-white gap-12 sm:gap-4 relative bottom-10 border sm:h-[40vh] sm:w-11/12'>
                <p className='absolute flex items-center justify-center text-2xl rounded-full cursor-pointer top-1 right-3' onClick={() => setShowModal(false)}>x</p>
                <img className='h-4/6 sm:w-1/2' src={currentProduct.DefaultProductImage || currentProduct.altImageUrl || currentProduct.image.url}/>
                <div className='flex flex-col justify-center w-1/2 gap-2 items-left h-4/6 sm:gap-4'>
                    <p className='overflow-auto text-sm sm:h-1/2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <section className='flex gap-4'>
                        <div className={`border-2 h-10 w-10 flex justify-center items-center cursor-pointer ${currentProduct.size == 'S' && 'bg-gray-200'}`} onClick={(event) => handleSizeClick(event)}>S</div>
                        <div className={`border-2 h-10 w-10 flex justify-center items-center cursor-pointer ${currentProduct.size == 'M' && 'bg-gray-200'}`} onClick={(event) => handleSizeClick(event)}>M</div>
                        <div className={`border-2 h-10 w-10 flex justify-center items-center cursor-pointer ${currentProduct.size == 'L' && 'bg-gray-200'}`} onClick={(event) => handleSizeClick(event)}>L</div>
                    </section>
                    <h1 className='text-xl font-bold sm:text-base'>{currentProduct.ListPrice || currentProduct.prices[0].regularPrice.minPrice}$</h1>
                    <button onClick={handleAddToCart} className='w-fit py-4 px-16 text-center rounded-md hover:scale-[0.98] border bg-black text-white sm:py-1 sm:px-4'>Add To Cart</button>
                </div>
            </section>
        )}
    </main>
  )
}

export default Modal