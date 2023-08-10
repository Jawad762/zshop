import React from 'react'

const Footer = () => {
  return (
    <section className="h-fit w-screen border-t border-gray mt-32 flex justify-center items-center">
        <div className="h-full w-1/3 flex flex-col items-center gap-8 pt-8 sm:w-full">
        <p className="text-sm w-full text-center">10% off your next purchase by subscribing to the newsletter</p>
        <input placeholder="Enter your e-mail" className="bg-none border-b border-gray text-sm w-8/12 pb-2 outline-none text-gray"/>
        <button className="bg-black w-8/12 text-sm py-3 text-white hover:bg-gray-700">Subscribe</button>
        <p className="text-[0.6rem] w-full text-center">© 2023 Z-SHOP All rights reserved Privacy Policy and Cookies | Terms & Conditions</p>
        </div>
  </section>
  )
}

export default Footer