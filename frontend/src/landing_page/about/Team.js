import React from 'react'
import nithinKamath from '../images/nithinKamath.jpg'
const Team = () => {
  return (
    <div className='container' style={{paddingTop:"5%",paddingBottom:"5%"}}>
        <div className='row'>
            <div className='col-6'>
                <p>We kick-started operations on the 15th of August, 2010 <br/> with the goal of breaking all barriers that traders and <br/> investors face in India in terms of cost, support, and <br/> technology. We named the company Zerodha, a <br/> combination of Zero and "Rodha", the Sanskrit word for <br/> barrier.</p>
                <p>Today, our disruptive pricing models and in-house <br/> technology have made us the biggest stock broker in <br/> India.</p>
                <p>Over 1+ Crore clients place millions of orders every day <br/> through our powerful ecosystem of investment <br/> platforms, contributing over 15% of all Indian retail <br/> trading volumes.</p>
            </div>
            <div className='col-6'>
                <p>In addition, we run a number of popular open online <br/> educational and community initiatives to empower retail <br/> traders and investors.</p>
                <p>Rainmatter, our fintech fund and incubator, has invested <br/> in several fintech startups with the <br/> goal of growing the Indian capital markets.</p>
                <p>And yet, we are always up to something new every day. <br/> Catch up on the latest updates on our blog or see what <br/> the media is saying about us.</p>
            </div>
        </div>
        <div className='row' style={{display:"flex",alignItems:"center"}}>
            <h1 className='text-center pt-5'>People</h1>
            <div className='col-6 pt-5'>
                <img style={{borderRadius:"50%",width:"50%",marginLeft:"25%"}} src={nithinKamath}/>
                <h3 className='text-center'>Nithin Kamath</h3>
                <h5 className='text-center'>Founder, CEO</h5>
            </div>
            <div className='col-6 pt-5'>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on Homepage / TradingQnA / Twitter pt-5</p>
            </div>
        </div>
    </div>
  )
}

export default Team