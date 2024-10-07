import React from 'react'
import landingimg from '../images/landing.png'
const Hero = () => {
  return (
    <div className='container pt-5'>
      <div className='row text-center'>
        <img src={landingimg} className='mb-5'/>
        <h1 className='mt-3 text-muted' style={{fontSize:"2.5vw"}}>Invest in everything</h1>
        <h5 className='text-muted'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</h5>
        <button style={{margin:"0 auto",height:"5vh",fontSize:'1rem',borderRadius:"0.3rem",color:"white",fontSize:"1.5vw",width:"20%", alignItems:'center', backgroundColor:"#387ED1", border:"none", }}>Sign up for free</button>
      </div>
    </div>
  )
}

export default Hero