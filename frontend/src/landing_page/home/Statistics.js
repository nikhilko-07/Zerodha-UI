import React from 'react'
import ecosystem from '../images/ecosystem.png';
import PressLogo from '../images/pressLogos.png';
export const Statistics = () => {
  return (
    <div className='container' style={{paddingTop:"5%", color:"#424242"}}>
      <div className='row '>
      <div className='col-6'>
        <h1 >Trust with confidence</h1>
        <h3 style={{paddingTop:"5%", color:"#424242"}}>Customer-first always</h3>
        <p className='text-muted'>That's why 1.5+ crore customers trust Zerodha with
          <br/> ₹4.5+ lakh crores of equity investments and contribute to <br/> 15% of daily retail exchange volumes in India.</p>
        <h3 style={{paddingTop:"5%", color:"#424242"}}>No spam or gimmicks</h3>
        <p className='text-muted'>No gimmicks, spam, "gamification", or annoying push 
          <br/>notifications. High quality apps that you use at your <br/> pace, the way you like.</p>
        <h3 style={{paddingTop:"5%", color:"#424242"}}>The Zerodha universe</h3>
        <p className='text-muted'>Not just an app, but a whole ecosystem. Our investments  <br/>in 30+ fintech startups offer you tailored services <br/> specific to your needs.</p>
        <h3 style={{paddingTop:"5%", color:"#424242"}}>Do better with money</h3>
        <p className='text-muted' >With initiatives like Nudge and Kill Switch, we don't just <br/> facilitate transactions, but actively help you do better <br/> with your money.</p>
      </div>
      <div className='col-6' style={{justifyContent:"center", alignItems:"center",display:"flex"}}><img src={ecosystem} style={{width:"90%", height:"80%"}}/></div>
      <div className='col-12' style={{display:"flex", justifyContent:"center"}}><img src={PressLogo}/></div>
      </div>
    </div>
  )
}
