"use client"

import { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import MenShop from './MenShop'

export const Context = createContext()

const ContextComponent = () => {
    const [menClothes, setMenClothes] = useState([])

    const options = {
      method: 'GET',
      url: 'https://unofficial-shein.p.rapidapi.com/products/search',
      params: {
        keywords: 'men',
        language: 'en',
        country: 'US',
        currency: 'USD',
        sort: '7',
        limit: '39',
        page: '1'
      },
      headers: {
        'X-RapidAPI-Key': '0f049c01ecmsh2f0ebc7faf1d5edp105baajsna983c14680c9',
        'X-RapidAPI-Host': 'unofficial-shein.p.rapidapi.com'
      }
    };
  
    useEffect(()=> {
      const fetchData = async () => {
        try {
          const {data}= await axios.request(options);
          setMenClothes(data.info.products)
        }
        catch(err) {
          console.log(err)
        }
      }
      fetchData()
    },[])
  
    useEffect(() => {
      console.log(menClothes)
    },[menClothes])
  return (
    <Context.Provider value={{menClothes}}>
        <MenShop/>
    </Context.Provider>
  )
}

export default Context