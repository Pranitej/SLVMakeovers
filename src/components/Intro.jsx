import React from "react";

export default function Intro() {
  return (
    <section id="home" class="section">
      <div
        class="view jarallax intro-background-image"
        data-jarallax='{"speed": 0.2}'
      >
        <div class="mask">
          <div
            class="container d-flex align-items-center"
            style={{ height: "90%" }}
          >
            <div class="row smooth-scroll">
              <div class="col-sm-12 white-text">
                <div class="wow fadeInDown text-center" data-wow-delay="0.2s">
                  <hr class="white" />
                  <h1 class="white-text display-4 font-weight-bold">
                    <h1
                      style={{
                        fontSize: "40px",
                        fontFamily: "Advent Pro, sans-serif",
                        fontWeight: "300",
                      }}
                    >
                      Welcome to
                    </h1>
                    <h1
                      style={{
                        fontSize: "67px",
                        fontFamily: "Advent Pro, sans-serif",
                        fontWeight: "500",
                      }}
                    >
                      <b>
                        <>SLV Makeovers</>
                      </b>
                    </h1>
                  </h1>
                  <hr class="white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
