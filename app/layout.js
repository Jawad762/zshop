"use client"

import { createContext, useState, useEffect, useRef } from 'react'
import './globals.css'
import Navbar from '@/components/Navbar'
import axios from 'axios'
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import { usePathname } from 'next/navigation'

export const Context = createContext()

export default function RootLayout({ children }) {

    const [showModal, setShowModal] = useState(false)
    const [currentProduct, setCurrentProduct] = useState()
    const [menClothes, setMenClothes] = useState([])
    const [womenClothes, setWomenClothes] = useState([])
    const [showInput,setShowInput] = useState(false)
    const [cartProducts, setCartProducts] = useState([])
    const [text, setText] = useState('')
    const [search, setSearch] = useState('')
    const [showPurchaseMessage,setShowPurchaseMessage] = useState(false)
    const [loading, setLoading] = useState(true)
    const originalWomenClothes = useRef([]);
    const originalMenClothes = useRef([]);


    const menOptions = {
      method: 'GET',
      url: 'https://kohls.p.rapidapi.com/products/list',
      params: {
        limit: '40',
        offset: '2',
        keyword: 'training men',
        dimensionValueID: 'AgeAppropriate:Teens'
      },
      headers: {
        'X-RapidAPI-Key': 'fd8dde8db3msh3d227c559c08d64p16b45cjsn285f15046a40',
        'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
      }
    };

    const womenOptions = {
      method: 'GET',
      url: 'https://kohls.p.rapidapi.com/products/list',
      params: {
        limit: '40',
        offset: '2',
        keyword: 'women shirt',
        dimensionValueID: 'AgeAppropriate:Teens'
      },
      headers: {
        'X-RapidAPI-Key': 'fd8dde8db3msh3d227c559c08d64p16b45cjsn285f15046a40',
        'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
      }
    };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [menData, womenData] = await Promise.all([
          axios.request(menOptions),
          axios.request(womenOptions),
        ]);

        console.log(menData)
        console.log(womenData)

        setMenClothes(menData.data.payload.products);
        originalMenClothes.current = menData.data.payload.products;
        setWomenClothes(womenData.data.payload.products);
        originalWomenClothes.current = womenData.data.payload.products;
        setLoading(false)

        
      } catch (err) {
        console.error('Fetch error:', err);
      }
    };
    fetchData();
  }, []);

  const pathname = usePathname()

  const handleProductClick = (index) => {
    let product;
    if (pathname === '/men') product = menClothes.find(product => menClothes.indexOf(product) === index)
    if (pathname === '/women') product = womenClothes.find(product => womenClothes.indexOf(product) === index)
    product.size = 'M'
    setCurrentProduct(product)
    setShowModal(true)
  }

  const handleAddToCart = () => {
    setCartProducts(prev => {
      return [
        ...prev,
        currentProduct
      ];
    });
    setShowModal(false);
  };

  const handleDelete = (index) => {
    let newCart = cartProducts.filter((product) => index !== cartProducts.indexOf(product))
    setCartProducts(newCart)
  }

  const handleSizeClick = (event) => {
    setCurrentProduct(prev => ({
      ...prev,
      size:event.target.innerText
    }))
  }

  const handleSubmit = (event) => {
    if (text.length == 0) {
      if (pathname === '/women') setWomenClothes(originalWomenClothes.current)
      else if (pathname === '/men') setMenClothes(originalMenClothes.current)
    }
    setSearch(text)
    event.preventDefault()
  }

  useEffect(() => {
    if (pathname === '/women') {
      let newData = originalWomenClothes.current.filter(product =>
        product.productTitle.toLowerCase().includes(search.trim().toLowerCase())
      );
      setWomenClothes(newData);
    }

    else if (pathname === '/men') {
      let newData = originalMenClothes.current.filter(product =>
        product.productTitle.toLowerCase().includes(search.trim().toLowerCase())
      );
      setMenClothes(newData);
    }
  }, [search]);

  const handlePurchase = (e) => {
    e.preventDefault()
    setShowPurchaseMessage(true)
  }

  
  return (
    <Context.Provider value={{menClothes, handleProductClick, currentProduct, showModal, handlePurchase, setCartProducts, setShowModal, showInput, setShowInput, cartProducts, handleAddToCart, womenClothes, setSearch, setText, handleDelete, handleSizeClick,handleSubmit, showPurchaseMessage, setShowPurchaseMessage,loading}}>
    <html lang="en">
      <head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
          <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Monoton&display=swap" rel="stylesheet"/>
          <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"/>
      <body className={`h-screen w-screen m-0 p-0 text_font overflow-x-hidden ${showModal && 'overflow-y-hidden'}`}>
          <Navbar/>
          {showModal && <Modal/>}
          {children}
          {pathname !== '/checkout' && <Footer/>}
        </body>
      </head>
    </html>
    </Context.Provider>
  )
}

