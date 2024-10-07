import React from "react";

const Hero = () => {
  return (
    <div className="container" style={{ paddingTop: "2.5%",paddingBottom:"5%" }}>
      <div className="row">
        <div className="col-12">
          <h4 className="text-muted">
            To create a ticket, select a relevant topic
          </h4>
        </div>
        <div className="col-4 pt-5">
           <h4 style={{ color: "#222222", fontWeight: "normal",display:"flex",alignItems:"center" }}>
           <box-icon name='plus-circle'></box-icon> Account Openning
          </h4>
          <div style={{ listStyleType: "none", color: "#3892DE" }}>
            <li>Getting started</li>
            <li>Online</li>
            <li>Offline</li>
            <li>Charges</li>
            <li>Company, partnership and HUF</li>
            <li>Non Resident Indian(NRI)</li>
          </div>
        </div>
        <div className="col-4 pt-5">
          <h4 style={{ color: "#222222", fontWeight: "normal",display:"flex",alignItems:"center"  }}>
          <box-icon name='user'></box-icon> Your Zerodha Account
          </h4>
          <div style={{ listStyleType: "none", color: "#3892DE" }}>
            <li>Login credentials</li>
            <li>Your Profile</li>
            <li>Account modification and segment addition</li>
            <li>CMR & DP ID</li>
            <li>Nomination</li>
            <li>Transfer and conversion of shares</li>
          </div>
        </div>
        <div className="col-4 pt-5">
          <h4 style={{ color: "#222222", fontWeight: "normal",display:"flex",alignItems:"center"  }}>
          <box-icon name='candles' ></box-icon>  Trading and Markets
          </h4>
          <div style={{ listStyleType: "none", color: "#3892DE" }}>
            <li>Trading FAQs</li>
            <li>Kite</li>
            <li>Margins</li>
            <li>Product and order types</li>
            <li>Corporate actions</li>
            <li>Kite features</li>
          </div>
        </div>

        <div className="col-4 pt-5">
          <h4 style={{ color: "#222222", fontWeight: "normal",display:"flex",alignItems:"center"  }}> <box-icon name='credit-card-front' ></box-icon> Funds</h4>
          <div style={{ listStyleType: "none", color: "#3892DE" }}>
            <li>Fund withdrawal</li>
            <li>Adding funds</li>
            <li>Adding bank accounts</li>
            <li>eMandates</li>
          </div>
        </div>
        <div className="col-4 pt-5">
          <h4 style={{ color: "#222222", fontWeight: "normal",display:"flex",alignItems:"center"  }}><box-icon name='radio-circle' ></box-icon>Console</h4>
          <div style={{ listStyleType: "none", color: "#3892DE" }}>
            <li>IPO</li>
            <li>Portfolio</li>
            <li>Funds statement</li>
            <li>Profile</li>
            <li>Reports</li>
            <li>Referral program</li>
          </div>
        </div>
        <div className="col-4 pt-5">
          <h4 style={{ color: "#222222", fontWeight: "normal",display:"flex",alignItems:"center"  }}><box-icon name='coin' type='solid' ></box-icon>Coin</h4>
          <div style={{ listStyleType: "none", color: "#3892DE" }}>
            <li>Understanding mutual funds and Coin</li>
            <li>Coin app</li>
            <li>Coin web</li>
            <li>Transactions and reports</li>
            <li>National Pension Scheme (NPS)</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
