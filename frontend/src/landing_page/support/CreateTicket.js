import React from "react";

const CreateTicket = () => {
  return (
    <div
      className="container-fluid"
      style={{
        paddingTop: "5%",
        paddingBottom: "5%",
        display: "flex",
        justifyContent: "space-evenly",
        backgroundColor: "#387ED1",
        color: "white",
      }}
    >
      <div className="row">
        <div className="col-6">
          <h3 style={{ paddingBottom: "5%" }}>Support Portal</h3>
          <h3>Search for an answer or browse help topics to create a ticket</h3>
          <input
            style={{
              width: "70%",
              height: "20%",
              borderRadius: "0.5rem",
              border: "none",
            }}
            placeholder="Eg: how do i activate F&O,why is my order..."
          />
          <div style={{ display: "flex" }}>
            <h5>
              <a style={{ color: "white" }} href="#">
                Track account opening
              </a>
            </h5>
            <h5>
              <a style={{ color: "white" }} href="#">
                Track segment activation
              </a>
            </h5>

            <h5>
              <a style={{ color: "white" }} href="#">
                Intraday margins
              </a>
            </h5>
            <h5>
              <a style={{ color: "white" }} href="#">
                {" "}
                Kite user manual
              </a>
            </h5>
          </div>
        </div>
        <div className="col-6">
          <h4 style={{ paddingBottom: "5%" }}>Track tickets</h4>
          <h3>Featured</h3>
          <h5 className="col-6">
            <a>1. Suspension of trading - IDFC Limited</a>
          </h5>
          <h5 className="col-6">
            <a>2. Rights Entitlements listing in October 2024</a>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default CreateTicket;
