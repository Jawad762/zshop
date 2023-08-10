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
    <main className='h-screen w-screen flex flex-row justify-center items-center sm:flex-col '>
      <section className='border sm:border-none h-4/6 w-1/2 relative top-10 flex flex-col overflow-auto items-center sm:w-screen sm:mt-20'>
        <div className='flex justify-between absolute top-0 w-11/12 h-1/6 border-b items-center'>
          <h1 className='font-bold text-lg'>Shopping Cart</h1>
          <p className='text-lg'>{cartProducts.length === 1 ? `1 Item`: `${cartProducts.length} Items` }</p>
        </div>
        <table className="w-11/12 text-sm text-left text-gray-500 dark:text-gray-400 mt-20 overflow-auto sm:w-11/12">
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
                        <th scope="row" className="py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex items-center gap-1 text-[0.6rem] break-words">
                            {product.DisplayName || product.productTitle}<p className='font-bold'>({product.size})</p>
                        </th>
                        <td className="py-4 ">
                            <input type='number' value='1' className='outline-none w-10'/>
                        </td>
                        <td className="py-4 flex gap-4 items-center relative">
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

      <section className='border sm:border-none h-4/6 w-[20%] relative top-10 flex flex-col items-center sm:w-full '>
        <h1 className='w-11/12 h-1/6 border-b text-lg flex justify-left items-center'>Checkout</h1>
        <form onSubmit={handlePurchase} className='w-11/12'>
            <div className="grid grid-cols-2 gap-3 mt-2">
                <div className="col-span-2">
                    <label for="card-number" className="block text-sm font-medium text-gray-700 mb-1">Card Number<span className='text-blue-500'> *</span></label>
                    <input type="text" name="card-number" id="card-number" placeholder="0000 0000 0000 0000" className="w-full py-1 px-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" required minLength='16'/>
                </div>
                <div className="col-span-2">
                    <label for="expiration-date" className="block text-sm font-medium text-gray-700 mb-1">Expiration Date<span className='text-blue-500'> *</span></label>
                    <input type="text" name="expiration-date" id="expiration-date" placeholder="MM / YY" className="w-full py-1 px-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" required/>
                </div>
                <div className="col-span-2">
                    <label for="cvv" className="block text-sm font-medium text-gray-700 mb-1">CVV<span className='text-blue-500'> *</span></label>
                    <input type="text" name="cvv" id="cvv" placeholder="000" className="w-full py-1 px-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" required/>
                </div>
                <div className="col-span-2">
                    <label for="card-holder" className="block text-sm font-medium text-gray-700 mb-1">Card Holder<span className='text-blue-500'> *</span></label>
                    <input type="text" name="card-holder" id="card-holder" placeholder="Full Name" className="w-full py-1 px-2 border border-gray-400 rounded-lg focus:outline-none focus:border-blue-500" required/>
                </div>
            </div>
            <div className="mt-8">
                <button type="submit" className="w-full bg-blue-600 text-white font-medium py-2 rounded-lg focus:outline-none relative bottom-2">Confirm</button>
            </div>
        </form>
      </section>
    </main>
    </>
  )
}

export default Cart