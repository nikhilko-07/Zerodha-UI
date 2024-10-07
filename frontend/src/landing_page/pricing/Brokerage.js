import React from "react";

const Brokerage = () => {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-6">
          <h3 style={{ color: "#387ED1" }}>Brokerage calculator</h3>
          <li className="text-muted">
            Call & Trade and RMS auto-squareoff.Additional charges pf 50 + GST
            per order.
          </li>
          <li className="text-muted">
            Digital contact notes will be send via e-mail
          </li>
          <li className="text-muted">
            Physical copies of contract notes, if require, shall be charged 20
            per contract note.Courier charges apply.
          </li>
          <li className="text-muted">
            For NRI account (non_PIS), 0.5% or 100 per executed order for equity
            (whichever is low).
          </li>
          <li className="text-muted">
            FOR NRI account (IPS),0.5% or 200 per executed order for
            equity(whichever is lower).
          </li>
          <li className="text-muted">
            if the account is debit balance, any order placed will be charged 40
            per executed order instead of 20 per executed order.
          </li>
        </div>
        <div className="col-6">
          <h3 style={{ color: "#387ED1" }}>List of charges</h3>
        </div>
      </div>
    </div>
  );
};

export default Brokerage;
