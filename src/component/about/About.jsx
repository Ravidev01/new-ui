import React from "react";
import img from '../../assets/images/img.png'

function About() {
  return (
    <div className="container pt-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h4>Your time matters.</h4>
          <p>Every day, we do our best to help you spend it productively.</p>
          <div>
          <button className="btn btn-primary text-light rounded-4 me-3 mb-4 bg-none">
            Get Now
          </button>
          <button style={{color:"#0B5ED7"}} className="btn btn-light border border-primary mb-4 rounded-4 bg-none">
            Free Trial
          </button>
          </div>
        </div>
      </div>
      <div className="row justify-content-between ">
        <div className="col-md-7 mb-4 text-start">
          <h3>About Us</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            PageMaker including versions of Lorem Ipsum.
          </p>
          <p>
            Our timesheet system follows SaaS methodology to facilitate the
            needs in the fields of Accounting, Hospitals/Clinics, Software
            services, Medical/Dental offices, Financial services, Lawyers and
            Staffing industries
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
            <img style={{width:"300px",height:"250px"}} className="col-md-5 rounded-circle float-end my-5 d-none d-md-block " src={img} alt="img"></img>
      </div>
    </div>
  );
}

export default About;
