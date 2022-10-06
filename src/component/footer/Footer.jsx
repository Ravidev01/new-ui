import React from "react";
import '../footer/footer.css'
import img from '../../assets/images/img.png'


export function Footer() {
  return (
    <div className="footer">
      <div className="footertop">
        <div className="fcard">
        <h3>NewUI Is Very Easy To Use</h3>
        <p style={{textAlign:"justify"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et</p>
        <button className="btn btn-warning text-light bg-none">Get Your Free Trial Now</button>
        </div>
        <div>
            <img src={img} className="rounded mx-auto d-block"alt="img"></img>
        </div>
      </div>
      <hr style={{border: "1px solid white"}}></hr>
      <div className="footerdown">
        <h4>NEW UI</h4>
        {/* <ul style={{listStyleType: "none"}}>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
        </ul> */}
        <p>About Us</p>
        <p>About Us</p>
        <p>About Us</p>
        <p>About Us</p>
        <p>About Us</p>
        <h6>Follow us on</h6>
      </div>
      <p>© New2022 . All Rights Reserved</p>
    </div>
  );
}

// export default Footer;

export  function Footer1() {
  return (
    <div className="footer pt-5 pb-2">
      <div className="footerdown">
        <h4>NEW UI</h4>
        {/* <ul style={{listStyleType: "none"}}>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
            <li>About Us</li>
        </ul> */}
        <p>About Us</p>
        <p>About Us</p>
        <p>About Us</p>
        <p>About Us</p>
        <p>About Us</p>
        <div>

        <h6>Follow us on</h6>
        <div className="col">

        <i class="bi p-1 bi-facebook"></i>
        <i class="bi p-1  bi-youtube"></i>
        <i class="bi p-1  bi-twitter"></i>
        <i class="bi p-1 bi-instagram"></i>
        </div>
        </div>
      </div>
      <p>© New2022 . All Rights Reserved</p>
    </div>
  );
}


