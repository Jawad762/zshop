"use client"
import React, { useContext } from 'react'
import { Context } from '@/app/layout'
import { MdDelete } from "react-icons/md";
import PurchaseMessage from './PurchaseMessage';

const Cart = () => {
  let sum = 0
  const {cartProducts, handleDelete, handlePurchase, showPurchaseMessage} = useContext(Context)

  return (
    <>
    {showPurchaseMessage && <PurchaseMessage/>}
    <main className='flex flex-row items-center justify-center w-screen h-screen sm:flex-col '>
      <section className='relative flex flex-col items-center w-1/2 overflow-auto border sm:border-none h-4/6 top-10 sm:w-screen sm:mt-20'>
        <div className='absolute top-0 flex items-center justify-between w-11/12 border-b h-1/6'>
          <h1 className='text-lg font-bold'>Shopping Cart</h1>
          <p className='text-lg'>{cartProducts.length === 1 ? `1 Item`: `${cartProducts.length} Items` }</p>
        </div>
        <table className="w-11/12 mt-20 overflow-auto text-sm text-left text-gray-500 dark:text-gray-400 sm:w-11/12">
            <thead className="text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" className="py-3 rounded-l-lg">
                        Product name
                    </th>
                    <th scope="col" className="py-3">
                        Qty
                    </th>
                    <th scope="col" className="py-3 rounded-r-lg">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                {cartProducts.map((product,index) => {
                    return (
                        <tr className="bg-white dark:bg-gray-800">
                        <th scope="row" className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-1 sm:text-[0.6rem] break-words">
                            {product.DisplayName || product.productTitle}<p className='font-bold'>({product.size})</p>
                        </th>
                        <td className="py-4 ">
                            <input type='number' value='1' className='w-10 outline-none'/>
                        </td>
                        <td className="relative flex items-center gap-4 py-4">
                            {product.ListPrice || product.prices[0].regularPrice.minPrice}$ <MdDelete onClick={() => handleDelete(index)} className='scale-[1.2] text-red-500 font-bold cursor-pointer absolute -right-1'/>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
            <tfoot>
                <tr className="font-semibold text-gray-900 dark:text-white">
                    <th scope="row" className="py-3 text-base">Total</th>
                    <td className="py-3">{cartProducts.length}</td>
                    <td className="py-3">{cartProducts.map(product => {
                        sum+=Number(product.ListPrice || product.prices[0].regularPrice.minPrice)
                    })}
                    {sum.toFixed(2)}$
                    </td>
                </tr>
            </tfoot>
    </table>

      </section>

      <section className='border sm:border-none h-4/6 lg:w-[20%] md:w-[40%] relative top-10 flex flex-col items-center sm:w-full '>
        <h1 className='flex items-center w-11/12 text-lg border-b h-1/6 justify-left'>Checkout</h1>
        <form onSubmit={handlePurchase} className='w-11/12'>
            <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="col-span-2">
                    <label for="card-number" className="block mb-1 text-sm font-medium text-gray-700">Card Number<span className='text-blue-500'> *</span></label>
                    <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000" className="w-full px-2 py-1 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" required minLength='16'/>
                </div>
                <div className="col-span-2">
                    <label for="expiration-date" className="block mb-1 text-sm font-medium text-gray-700">Expiration Date<span className='text-blue-500'> *</span></label>
                    <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY" className="w-full px-2 py-1 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" required/>
                </div>
                <div className="col-span-2">
                    <label for="cvv" className="block mb-1 text-sm font-medium text-gray-700">CVV<span className='text-blue-500'> *</span></label>
                    <input type="text" name="cvv" id="cvv" placeholder="000" className="w-full px-2 py-1 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" required/>
                </div>
                <div className="col-span-2">
                    <label for="card-holder" className="block mb-1 text-sm font-medium text-gray-700">Card Holder<span className='text-blue-500'> *</span></label>
                    <input type="text" name="card-holder" id="card-holder" placeholder="Full Name" className="w-full px-2 py-1 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" required/>
                </div>
            </div>
            <div className="mt-8">
                <button type="submit" className="relative w-full py-2 font-medium text-white bg-blue-600 rounded-lg focus:outline-none bottom-2">Confirm</button>
            </div>
        </form>
      </section>
    </main>
    </>
  )
}

export default Cart