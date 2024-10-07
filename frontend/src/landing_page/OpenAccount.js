import React from "react";

const OpenAccount = () => {
  return (
    <div className="container p-5">
      <div className="row text-center">
        <div>
          <h1 className="text-muted">Open a Zerodha account</h1>
        </div>
        <div>
          <p className="text-muted">
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&O trades.
          </p>
        </div>
        
        <button style={{color:"white",fontSize:"1vw", borderRadius:"0.2rem",backgroundColor:"#387ED1", border:"none", height:"5vh", width:'20%',margin:"0 auto", display:"flex",  alignItems:"center", justifyContent:"center" }}>Sign up for free</button>
      </div>
    </div>
  );
};

export default OpenAccount;
