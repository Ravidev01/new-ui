import React from "react";
import img from "../../assets/images/img.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img2 from "../../assets/images/img2.jpeg";
import Carousel from '../home/component/card/Card'

import "../home/home.css";
function Home() {
  return (
    <div className="footer1">
      <div className="footertop1">
        <div className="fcard1 col-xs-12">
          <h3>NewUI Is Very Easy To Use</h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doeiusmod tempor incididunt ut labore et
          </p>
          <button>Get Your Free Trial Now</button>
        </div>
        <div className="col-xs-12">
          <img
            src={img}
            className="rounded mx-auto d-block img1"
            alt="img"
          ></img>
        </div>
      </div>
      <div className="homeimg">
        <img src={img3} className="homeimgrow" alt="img"></img>
        <img src={img4} className="homeimgrow" alt="img"></img>
        <img src={img3} className="homeimgrow" alt="img"></img>
        <img src={img4} className="homeimgrow" alt="img"></img>
        <img src={img3} className="homeimgrow" alt="img"></img>
      </div>
      <div className="hometab">
        <h4>Why You Choose Us</h4>
        <ul
          className="nav nav-pills mb-3 justify-content-center"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <button
              className="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              Project Activity
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              Project Activity
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Project Activity
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
          tabindex="0"
        >
          <h4>Track and improve Company productivity</h4>
          <p>
            Keep your team productive without constant check-ins. Learn more
            about
          </p>
          <img className="tabimg rounded-3 shadow-sm" src={img2} alt="hello"></img>
        </div>
        <div
          className="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
          tabindex="0"
        >
          <h4>Track and improve Company productivity</h4>
          <p>
            Keep your team productive without constant check-ins. Learn more
            about
          </p>
          <img className="tabimg rounded-3 shadow-sm" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/d0bac985516221.5d7e861fd007a.jpg" alt="hello"></img>
        </div>
        <div
          className="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
          tabindex="0"
        >
          <h4>Track and improve Company productivity</h4>
          <p>
            Keep your team productive without constant check-ins. Learn more
            about
          </p>
          <img className="tabimg rounded-3 shadow-sm" src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/a7d8a885516221.5d7e861fd0c57.jpg" alt="hello"></img>
        </div>
      </div>
      <div className="cardview">
         <Carousel/>
      </div>
    </div>
  );
}

export default Home;
