import React from "react";
import ZerodhaFund from "../images/zerodhaFundhouse.png";
import Sensi from "../images/sensibullLogo.svg";
import Tijori from "../images/tijori.svg";
import Streak from "../images/streakLogo.png";
import SmallLogo from "../images/smallcaseLogo.png";
import Ditto from "../images/dittoLogo.png";
const Universe = () => {
  return (
    <div className="container" style={{ paddingTop: "5%" }}>
      <div className="row">
        <div className="col-12 text-center">
          <h4 className="text-muted">
            Want to know more about our technology stack? Check out the{" "}
            <a href="#" style={{ textDecoration: "none", color: "#387ED1" }}>
              Zerodha.tech
            </a>{" "}
            blog.
          </h4>
          <h1 style={{ paddingTop: "7%" }} className="text-muted">
            The Zerodha Universe
          </h1>
          <p style={{ paddingTop: "2.5%" }}>
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "10%",
          }}
        >
          <div className="col-4 p-3">
            <img style={{ width: "50%" }} src={ZerodhaFund} />
            <p className=" mt-2 text-muted">
              Our asset management venture <br />
              that is creating simple and transparent index <br />
              funds to help you save for your goals.
            </p>
          </div>
          <div className="col-4 p-3">
            <img style={{ width: "50%" }} src={Sensi} />
            <p className=" mt-4 text-muted">
              Options trading platform that lets you
              <br />
              create strategies, analyze positions, and examine
              <br />
              data points like open interest, FII/DII, and more.
            </p>
          </div>
          <div className="col-4 p-3">
            <img style={{ width: "50%" }} src={Tijori} />
            <p className=" mt-2 text-muted">
              Investment research platform
              <br />
              that offers detailed insights on stocks,
              <br />
              sectors, supply chains, and more.
            </p>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "10%",
          }}
        >
          <div className="col-4 p-3">
            <img style={{ width: "50%" }} src={Streak} />
            <p className=" mt-2 text-muted">
              Systematic trading platform
              <br />
              that allows you to create and backtest
              <br />
              strategies without coding.
            </p>
          </div>
          <div className="col-4 p-3">
            <img style={{ width: "50%" }} src={SmallLogo} />
            <p className=" mt-4 text-muted">
              Thematic investing platform <br />
              that helps you invest in diversified
              <br />
              baskets of stocks on ETFs.
            </p>
          </div>
          <div className="col-4 p-3">
            <img style={{ width: "50%" }} src={Ditto} />
            <p className=" mt-2 text-muted">
              Personalized advice on life <br /> and health insurance. No spam{" "}
              <br />
              and no mis-selling. Sign up for free
            </p>
          </div>
        </div>
      </div>
      <div className="col-12" style={{display:"flex",marginBottom:"5%",marginTop:"5%"}}>
        <button style={{color:'white', border:"none",borderRadius:"0.3rem",backgroundColor:"#387ED1",height:"5vh",width:"10vw",margin:"0 auto",fontSize:"1.2vw"}}>Signup for free</button>
      </div>
    </div>
  );
};

export default Universe;
