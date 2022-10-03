import React from "react";
import "../card/card.css";

function Carousel() {
  return (
    <div className="container">
      <div className="btn2"><div>
        <h5>What Our Customer Says</h5>
        <hr  style={{borderBottom: "3.5px solid black",margin:"0",width:"45%",color:"#265BCB"}}></hr>
      </div>
        <div>
        <button
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          hello
        </button>
        <button
          //    class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          Hi
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
  );
}

export default Carousel;
