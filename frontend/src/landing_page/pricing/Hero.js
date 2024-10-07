import React from "react";
import Zero from "../images/pricing0.svg";
import Zero1 from "../images/pricingEquity.svg";
const Hero = () => {
  return (
    <div className="container " style={{ paddingTop: "5%" }}>
      <div className="row">
        <div className="col-12 text-center text-muted">
          <h1>Charges</h1>

          <h5>List of all charges and taxes</h5>
        </div>

        <div className="col-4">
          <img src={Zero} />
          <h2 className="text-muted text-center">Free equity delivery</h2>
          <p className="text-muted text-center">
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <h2 className="text-muted text-center">Intraday and F&O trades</h2>
          <p className="text-muted text-center">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src={Zero1} />
          <h2 className="text-muted text-center">Free direct MF</h2>
          <p className="text-muted text-center">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
