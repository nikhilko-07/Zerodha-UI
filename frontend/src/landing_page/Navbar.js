import React from "react";
import Logo from "./images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  let routeTo = useNavigate()
  return (
    <div
      className="container-fluid"
      style={{
        height: "7vh",
        borderBottom: "1px solid #F3F3F3",
        boxShadow: "0px 1px 6px",
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <div
        className="row"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="col-6">
          <img style={{ width: "25%" }} onClick={()=>{routeTo("/")}} src={Logo} />
        </div>
        <div
          className="col-6 text-muted"
          style={{
            display: "flex",
            fontSize: "1vw",
            listStyleType: "none",
            gap: "5%",
          }}
        >
          <li>
            {" "}
            <Link style={{textDecoration:"none", color:"gray"}} to="/signup">Signup</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", color:"gray"}} to="/about">About</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", color:"gray"}} to="/product">Products</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", color:"gray"}} to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none", color:"gray"}} to="/support">Support</Link>
          </li>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
