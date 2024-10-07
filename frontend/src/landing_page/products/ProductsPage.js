import React from 'react'
import Hero from './Hero'
import LeftSection from './LeftSection'
import RightSection from './RightSection'
import Universe from './Universe'
import Kite from '../images/kite.png'
import Coin from '../images/coin.png'
import Varsity from '../images/varsity.png'
import Console from '../images/console.png'
const ProductsPage = () => {
  return (
    <>
    <Hero/>
    <LeftSection 
    imageURL={Kite}
    productName="Kite"
    productDescription="Our ultra-fast flagship trading platform with  streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
    />
    <RightSection
     imageURL={Console}
     productName="Console"
     productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
     />
    <LeftSection 
    imageURL={Coin}
    productName="Coin"
    productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
    />
     <RightSection
     imageURL={Console}
     productName="Kite Connect API"
     productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
     />
     <LeftSection 
    imageURL={Varsity}
    productName="Varsity mobile"
    productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
    />
    <Universe/>
    </>
  )
}

export default ProductsPage