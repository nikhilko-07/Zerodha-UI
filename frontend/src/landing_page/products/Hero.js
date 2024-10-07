import React from "react";

const Hero = () => {
  return (
    <div
      className="container text-center "
      style={{ paddingTop: "5%", borderBottom: "2px solid #EEEEEE" }}
    >
      <div className="row">
        <div className="col-12 text-muted">
          <h1>Technology</h1>
        </div>
        <div className="col-12 text-muted">
          <h4>Sleek, modern, and intuitive trading platforms</h4>
        </div>
        <div className="col-12 pt-3" style={{ paddingBottom: "10%" }}>
          <h6 className="text-muted">
            Check out our{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              investment offerings →
            </a>{" "}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default Hero;
