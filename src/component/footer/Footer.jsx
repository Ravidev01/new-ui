import React from "react";
import '../footer/footer.css'
import img from '../../assets/images/img.png'


function Footer() {
  return (
    <div className="footer">
      <div className="footertop">
        <div className="fcard">
        <h3>NewUI Is Very Easy To Use</h3>
        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et</p>
        <button>Get Your Free Trial Now</button>
        </div>
        <div>
            <img src={img} className="rounded mx-auto d-block"alt="img"></img>
        </div>
      </div>
      <hr style={{border: "1px solid white"}}></hr>
      <div className="footerdown">
        <h4>NEW UI</h4>
        <ul style={{listStyleType: "none"}}>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
        </ul>
        <h6>Follow us on</h6>
      </div>
      <p>© New Ui2022 . All Rights Reserved</p>
    </div>
  );
}

export default Footer;
