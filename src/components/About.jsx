import React from "react";

export default function About() {
  return (
    <section class="section bg-dark text-light" id="about">
      <div className="container">
        <h1
          class="section-heading text-center mb-3 pt-4 wow fadeIn"
          data-wow-delay="0.2s"
        >
          About us
        </h1>
        <div class="row wow fadeIn" data-wow-delay="0.4s">
          <div class="col-md-12 text-center mb-5">
            <p class="lead mb-4" style={{ fontSize: "17px" }}>
              SLV Makeovers (Smart Look Vision Makeovers) - Anupuram Priyanka
              Located in the heart of Warangal at Battal Bazar near
              Venkateshwara Swamy Temple, SLV Makeovers is a premier beauty
              studio run by Anupuram Priyanka, a seasoned makeup artist with
              over 10 years of experience. Specializing in advanced beauty
              techniques, Priyanka offers a range of services including nano
              blading and micro blading for eyebrows, hydra facial treatments,
              and BB glow facials.
            </p>
            <p class="lead mb-4" style={{ fontSize: "17px" }}>
              SLV Makeovers also conducts exclusive 3-day workshops on
              semi-permanent makeup, where participants can learn cutting-edge
              beauty skills. With Priyanka’s expertise and personalized
              attention, clients and students alike are guaranteed a top-notch
              beauty experience. For more details, contact us at +91 8686 366009
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
