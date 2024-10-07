import React from 'react'
import { ReactSVG } from 'react-svg'; 
import PressLogo from '../images/pressLogos.png'
import Broker from '../images/largestBroker.svg'
const Awards = () => {
  return (
    <div className='container' style={{paddingTop:"10%"}}>
      <div className='row' >
        <div className='col-6'>
        <ReactSVG src={Broker} />
        </div>
        <div className='col-6'>
          <h1>Largest stock broker in India</h1>
          <p style={{paddingTop:"5%"}}> 2+ million Zerodha clients conrtibute to over 15% of all order volumes in India daily by trading and investion in:</p>
          <div style={{display:"flex", listStyleType:"none"}}>
          <div className='col-6' style={{paddingTop:"5%"}}>
            <li>Future and Options</li>
            <li>Commodity derivatives</li>
            <li>Currency derivatives</li>
          </div>
          <div className='col-6' style={{paddingTop:"5%"}}>
          <li>Stock & IPOs</li>
          <li>Direct mutual fundus</li>
          <li>Bonds and Govt. security</li>
          </div>
          </div>
          <img style={{width:"90%", paddingTop:"5%"}} src={PressLogo}  alt="Press Logos"/>
        </div>
      </div>
    </div>
  )
}

export default Awards