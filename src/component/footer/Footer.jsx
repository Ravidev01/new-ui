import React from "react";
import "../footer/footer.css";
import img from "../../assets/images/img.png";

export function Footer() {
  return (
    <div className="footer2 pb-0">
      <div className="footertop">
        <div className="fcard">
          <h3>NewUI Is Very Easy To Use</h3>
          <p style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
            doeiusmod tempor incididunt ut labore et
          </p>
          <button
            style={{ backgroundColor: "#FF8C00" }}
            className="btn text-light bg-none"
          >
            Get Your Free Trial Now
          </button>
        </div>
        <div>
          <img
            src={img}
            className="rounded-circle mx-auto d-block"
            alt="img"
          ></img>
        </div>
      </div>
      <hr style={{border: "1px solid white"}}></hr>
    </div>
  );
}

// export default Footer;

// export  function Footer1() {
//   return (
//     <div className="footer pt-5 pb-2">
//       <div className="footerdown">
//         <h4>NEW UI</h4>
//         <div>

//         </div>
//         <p>About Us</p>
//         <p>About Us</p>
//         <p>About Us</p>
//         <p>About Us</p>
//         <p>About Us</p>
//         <div>

//         <h6>Follow us on</h6>
//         <div className="col">

//         <i class="bi p-1 bi-facebook"></i>
//         <i class="bi p-1  bi-youtube"></i>
//         <i class="bi p-1  bi-twitter"></i>
//         <i class="bi p-1 bi-instagram"></i>
//         </div>
//         </div>
//       </div>
//       <p>© New2022 . All Rights Reserved</p>
//     </div>
//   );
// }

export function Footer1() {
  return (
    <div className="footer5  pt-3 pb-0 ">
      <div className="container-fluid mx-0 align-items-center  mt-4 px-0">
        <div className="row px-5 mx-0 justify-content-between ">
          <div className="col-md-1 pb-3">
            <h5>NEWUI</h5>
          </div>
          <div className="col-md-9">
            <div className="row gx-0 justify-content-md-center align-items-center">
              <p className="col-md-2 m-0 p-0 col-sm-10">About Us</p>
              <p className="col-md-2 m-0 p-0  col-sm-10">About Us</p>
              <p className="col-md-2 m-0 p-0 col-sm-10">About Us</p>
              <p className="col-md-2 m-0 p-0 col-sm-10">About Us</p>
              <p className="col-md-2 m-0 p-0 col-sm-10">About Us</p>
            </div>
          </div>
          <div className=" ps-md-0 col-md-2 ">
            <h6>Follow us on</h6>
            <i class="bi p-1 bi-facebook"></i>
            <i class="bi p-1  bi-youtube"></i>
            <i class="bi p-1  bi-twitter"></i>
            <i class="bi p-1 bi-instagram"></i>
          </div>
        </div>
        <div className="row  justify-content-start">
          <p className="mx-5  text-start">© New2022 . All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}
