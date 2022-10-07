import React from "react";

import "../features/features.css";
// import img2 from "../../assets/images/img2.jpeg";

function Features() {
  return (
    <div className="features " style={{overflowX: "hidden"}}>
      <div className="mt-5 pt-5 d-flex justify-content-center align-items-center row ">
        <div className="text-view col-md-6 col-11 p-xs-4  ">
          <h3>NewUI Is Very Easy To Use</h3>
          <p style={{ textAlign: "center" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doeiusmod tempor incididunt ut labore et Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
            commo.
          </p>
          <button style={{backgroundColor:"#FF8C00"}} className="btn  text-light rounded-4 me-3 mb-4 bg-none">
            Get Now
          </button>
          <button style={{color:"#0B5ED7"}} className="btn btn-light  border border-primary t mb-4 rounded-4 bg-none">
            Free Trial
          </button>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-11 rounded-3  ">
            <div
              style={{ backgroundColor: "rgb(223, 239, 250,0.3)" }}
              className="card p-4 shadow-sm border-0 p-3 mb-5 rounded"
            >
              <div className="card-title ">
                <h5>Easy to use User Interface</h5>
              </div>
              <div className="card-body">
                <img className="rounded-3 img-fluid" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a7d8a885516221.5d7e861fd0c57.jpg" alt="img" />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-11 rounded-3  ">
            <div
              style={{ backgroundColor: "rgb(223, 239, 250,0.8)" }}
              className="card p-4 shadow-sm border-0 p-3 mb-5 rounded"
            >
              <div className="card-title ">
                <h5>Easy to use User Interface</h5>
              </div>
              <div className="card-body">
                <img className="rounded-3 img-fluid" src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/d0bac985516221.5d7e861fd007a.jpg' alt="img" />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commo.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 col-11 rounded-3  ">
            <div
              style={{ backgroundColor: "rgb(223, 239, 250,0.8)" }}
              className="card p-4 shadow-sm border-0 p-3 mb-5 rounded"
            >
              <div className="card-title ">
                <h5>Easy to use User Interface</h5>
              </div>
              <div className="card-body">
                <img className="rounded-3 img-fluid" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d17c3885516221.5d7e861fd06d5.jpg" alt="img" />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-11 rounded-3  ">
            <div
              style={{ backgroundColor: "rgb(223, 239, 250,0.3)" }}
              className="card p-4 shadow-sm border-0 p-3 mb-5 rounded"
            >
              <div className="card-title ">
                <h5>Easy to use User Interface</h5>
              </div>
              <div className="card-body">
                <img className="rounded-3 img-fluid" src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/a7d8a885516221.5d7e861fd0c57.jpg' alt="img" />
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
