import React, { useContext } from 'react'
import { Context } from '@/app/layout'
import { useRouter } from 'next/navigation'

const PurchaseMessage = () => {
  const {setShowPurchaseMessage, setCartProducts} = useContext(Context)
  const router = useRouter()
  return (
    <main className='h-screen w-screen flex justify-center items-center bg-none cursor-pointer border-2 fixed z-10'>
        <div className='h-52 w-72 bg-white shadow-xl relative flex flex-col items-center justify-center gap-4'>
            <p onClick={() => {
                setShowPurchaseMessage(false)
                setCartProducts([])
            }} className='absolute text-2xl top-1 right-3'>x</p>

            <h1 className='text-xl'>Thanks for your purchase!</h1>

            <button onClick={() => {
                setShowPurchaseMessage(false)
                router.push('/')
                setCartProducts([])
            }} className='bg-none w-fit px-8 py-2 font-bold border border-black'>Continue Shopping</button>
        </div>
    </main>
  )
}

export default PurchaseMessage