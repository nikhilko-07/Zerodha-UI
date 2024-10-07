import React from 'react'
import { ReactSVG } from 'react-svg';
import pricing from '../images/Price.svg'
const Pricing = () => {
  return (
    <div className='container' style={{paddingTop:"10%"}}>
      <div className='row' style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
        <div className='col-6'><div> <ReactSVG src={pricing} /></div></div>
        <div className='col-6'>
          <h3 className='text-muted' style={{paddingBottom:"5%"}}>Free and open market education</h3>
          <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <h6><a href='#' style={{textDecoration:"none"}}>Varsity</a> </h6>
          <p>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <h6><a href='#' style={{textDecoration:"none"}}>TradingQ&A</a></h6>
        </div>
      </div>
    </div>
  )
}

export default Pricing