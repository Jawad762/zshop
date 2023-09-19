import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
    { link: "https://lb.mikesport.com/cdn/shop/files/IN192774_2.png?v=1690368009&width=360" },
    { link: "https://lb.mikesport.com/cdn/shop/products/278f74266ba98efeb02abbf38d2e5e75.png?v=1689998305&width=360" },
    { link: "https://cdn.shopify.com/s/files/1/2277/0487/products/bdd75d54c75bbd0d2d1508058f26ccb7_600x.png?v=1689306948" },
    { link: "https://cdn.shopify.com/s/files/1/2277/0487/products/f5877030393c30d2420b5e020a9920bc_600x.png?v=1689220798" },
    { link: "https://cdn.shopify.com/s/files/1/2277/0487/products/f4f7a767fc1793cfb8137ca66bca1e2a_600x.png?v=1689220780" },
    { link: "https://cdn.shopify.com/s/files/1/2277/0487/products/063fa55b4afb364a4d4543a8cc7b10ad_600x.png?v=1689220821" },
    { link: "https://cdn.shopify.com/s/files/1/2277/0487/products/a7553e15b778b6e2754ee7d5f0ef0b34_600x.png?v=1689220948" },
  ]

export default class ResizableMobile extends Component {
    render() {
      const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerHeight: '100px',
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover:false,
        pauseOnFocus:false,
      };
      return (
          <div className="w-screen" >
            <Slider {...settings}>
              {images.map(image => {
                return (
                  <div className="h-48 px-2 focus:outline-none">
                    <img className='w-full h-full shadow-xl' src={image.link} />
                  </div>
                )
              })}
            </Slider>
          </div>
      );
    }
  }