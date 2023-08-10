"use client"
import React, { useContext } from 'react'
import { Context } from '@/app/layout'
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const WomenShop = () => {
  const {womenClothes, handleProductClick, showModal,loading} = useContext(Context)
  return (
    <>
    <main className={`min-h-screen w-screen flex flex-col items-center relative top-32 gap-16 ${showModal && 'blur'}`}>
      <h1 className='text-6xl border-b-2 border-black pb-4'>IN STOCK</h1>
      {loading && (
        <div role="status">
            <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
            </svg>
            <span className="sr-only">Loading...</span>
        </div>
    )}
      <section className='w-[75%] h-full grid grid-cols-4 gap-6 pb-16 sm:w-11/12 sm:grid-cols-2'>
        {womenClothes.map((product,index) => (
          <div className='flex w-full flex-col items-center'>
            <div className='overflow-hidden shadow-xl h-72 w-full sm:h-60'>
              <img onClick={() => handleProductClick(index)} src={product.altImageUrl ? product.altImageUrl : product.image.url} width={500} height={500} className='h-full w-full hover:scale-[1.5] cursor-pointer'></img>
            </div>
            <div className='w-full flex flex-col items-left py-4'>
              <p className='text-base font-bold'>{product.productTitle}</p>
              <p className='text-sm'>{product.prices[0].regularPrice.minPrice}$</p>
            </div>
          </div>
        ))}
      </section>
    </main>
    </>
  )
}

export default WomenShop