import React from "react";
import "../card/card.css";
import img9 from "../../../../assets/images/img.png";

function Carousel() {
  return (
    <div className="home">
    <div  className="container me-0">
      <div className="btn2">
        <div>
          <h5>What Our Customer Says</h5>
          <hr
            style={{
              borderBottom: "3.5px solid black",
              margin: "0",
              width: "45%",
              color: "#265BCB",
            }}
          ></hr>
        </div>
        <div>
          <button
            class="btn btn-light rounded-5 m-1 px-1 py-0"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="blue"
              class="bi bi-chevron-left pe-2"
              viewBox="0 0 10 20"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
          </button>
          <button
            class="btn btn-light rounded-5 px-1 py-0 "
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="blue"
              class="bi bi-chevron-right pe-2 "
              viewBox="0 0 10 20"
            >
              <path
                fill-rule="evenodd"
                d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row justify-content-center">
              <div class="col-md-4 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. 
                    </p>
                    <div className="d-flex align-item-center justify-content-start">
                      <img
                        src={img9}
                        class=" img-fluid rounded-2 w-25 m-0 me-3  "
                        alt="..."
                      />
                      <div className="mt-2" >

                      <h6 className="p-0 m-0">Adam Chandler</h6>
                      <p>Design Factory</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4 mb-3">
                <div class="card">
                <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. 
                    </p>
                    <div className="d-flex align-item-center justify-content-start">
                      <img
                        src={img9}
                        class=" img-fluid rounded-2 w-25 m-0 me-3  "
                        alt="..."
                      />
                      <div className="mt-2" >

                      <h6 className="p-0 m-0">Adam Chandler</h6>
                      <p>Design Factory</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4  mb-3">
                <div class="card ">
                <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. 
                    </p>
                    <div className="d-flex align-item-center justify-content-start">
                      <img
                        src={img9}
                        class=" img-fluid rounded-2 w-25 m-0 me-3  "
                        alt="..."
                      />
                      <div className="mt-2" >

                      <h6 className="p-0 m-0">Adam Chandler</h6>
                      <p>Design Factory</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-md-3 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="col-md-3 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">Special title treatment</h4>
                    <p class="card-text">
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Carousel;
