import React from "react";
import '../pricing/pricing.css'

function Pricing() {
  return (
    <div>
      <div className="container">
        <div className="row pb-5  justify-content-center">
          <div className=" row justify-content-center col-md-6 mt-5 pt-5">
            <h3>
              NewUi Design Software that automates almost everything
            </h3>
            <p className="w-75 text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incid
            </p>
          </div>
        </div>
        <div className="row gy-4 justify-content-center mb-5 align-content-center">
          <div className="col-md-4 col-lg-3 col-9 col-sm-8 ">
            <div className="card hover shadow-lg border-0 pb-4">
              <div className="card-title pt-3 ">
                <h5>Personal</h5>
                <div className="card-text">
                  <h1 className="">
                    $0{" "}
                    <span style={{ verticalAlign: "sub", fontSize: "medium" }}>
                      For one user only
                    </span>
                  </h1>
                </div>
              </div>

              <button className=" btn btn-primary rounded-5 mx-3">
                Choose Plan
              </button>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div className="">
                  <ul class="list-group pb-5">
                    <li class="list-group-item pb-0 border-0">
                      {" "}
                      <i class="bi bi-check fs-5 text-success"></i>{" "}
                      <span>For one user only</span>
                    </li>
                    <li class="list-group-item py-0 border-0">
                      {" "}
                      <i class="bi bi-check fs-5 text-success"></i>{" "}
                      <span>For one user only</span>
                    </li>
                    <li class="list-group-item py-0 border-0">
                      {" "}
                      <i class="bi bi-check fs-5 text-success"></i>{" "}
                      <span>For one user only</span>
                    </li>
                    <li class="list-group-item py-0 border-0">
                      {" "}
                      <i class="bi bi-check fs-5 text-success"></i>{" "}
                      <span>For one user only</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-9 col-sm-8">
            <div className="card hover shadow-lg border-0 bg-primary text-white pb-4">
              <div className="card-title ">
                <p
                  className="rounded-top-3 p-1 shadow-sm"
                  style={{
                    backgroundColor: "#059862",
                    borderRadius: "5px 5px 0px 0px",
                  }}
                >
                  Recommended
                </p>
                <h5>Busines</h5>
                <div className="card-text">
                  <h1 className="">
                    $9{" "}
                    <span>
                      {/* <span style={{ verticalAlign: "super", fontSize: "medium" }}> ghb </span> */}

                      <span
                        style={{ verticalAlign: "sub", fontSize: "medium" }}
                      >
                        For one user only
                      </span>
                    </span>
                  </h1>
                </div>
              </div>

              <button style={{backgroundColor:"#FF8C00"}} className=" btn  rounded-5 mx-3 text-white">
                Choose Plan
              </button>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <ul
                  class="list-group pb-4 text-white"
                  style={{ backgroundColor: "none" }}
                >
                  <li class="list-group-item  bg-primary pb-0 border-0">
                    {" "}
                    <i class="bi bi-check fs-5 text-white"></i>{" "}
                    <span className="text-white">For one user only</span>
                  </li>
                  <li class="list-group-item bg-primary py-0 border-0">
                    {" "}
                    <i class="bi bi-check fs-5 text-white"></i>{" "}
                    <span className="text-white">For one user only</span>
                  </li>
                  <li class="list-group-item py-0 bg-primary border-0">
                    {" "}
                    <i class="bi bi-check fs-5 text-white"></i>{" "}
                    <span className="text-white">For one user only</span>
                  </li>
                  <li class="list-group-item py-0 bg-primary border-0">
                    {" "}
                    <i class="bi bi-check fs-5 text-white"></i>{" "}
                    <span className="text-white">For one user only</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-3 col-9 mb-4 col-sm-8 ">
            <div className="card hover shadow-lg  border-0 pb-4">
              <div className="card-title pt-3 ">
                <h5>Premium</h5>
                <div className="card-text">
                  <h1 className="">
                    $34{" "}
                    <span style={{ verticalAalign: "sub", fontSize: "medium" }}>
                      For one user only
                    </span>
                  </h1>
                </div>
              </div>

              <button className=" btn btn-primary rounded-5 mx-3">
                Choose Plan
              </button>
              <div className="card-body d-flex flex-column align-items-center justify-content-center">
                <div className="">
                  <ul class="list-group pb-5">
                    <li class="list-group-item pb-0 border-0">
                      {" "}
                      <i class="bi bi-check fs-5 text-success"></i>{" "}
                      <span>For one user only</span>
                    </li>
                    <li class="list-group-item py-0 border-0">
                      {" "}
                      <i class="bi bi-check fs-5 text-success"></i>{" "}
                      <span>For one user only</span>
                    </li>
                    <li class="list-group-item py-0 border-0">
                      {" "}
                      <i class="bi bi-check fs-5 text-success"></i>{" "}
                      <span>For one user only</span>
                    </li>
                    <li class="list-group-item py-0 border-0">
                      {" "}
                      <i class="bi bi-check fs-5 text-success"></i>{" "}
                      <span>For one user only</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
