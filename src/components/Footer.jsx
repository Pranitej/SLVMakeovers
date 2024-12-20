import React from "react";

export default function Footer() {
  return (
    <footer
      class="page-footer footer-tiles text-center text-md-left grey darken-4 mt-0 pt-4 pb-5"
      id="contact"
    >
      <div class="container">
        <div class="row mt-2">
          <div class="col-xl-4 col-lg-4 pb-1 wow fadeIn" data-wow-delay="0.3s">
            <h5 class="title mb-4">
              <strong>ABOUT OUR SERVICES</strong>
            </h5>

            <p>
              Specialized in advanced beauty techniques, we offer a range of
              services including nano blading and micro blading for eyebrows,
              hydra facial treatments, and BB glow facials.
            </p>
          </div>
          <hr class="w-100 clearfix d-lg-none" />

          <div
            class="col-xl-4 col-lg-4 col-md-6 pt-1 pb-1 wow fadeIn"
            data-wow-delay="0.3s"
          >
            <p>
              <a
                href="https://maps.app.goo.gl/TxESKhtzgyVKivVe9"
                target="_blank"
              >
                <i class="fas fa-home mr-3"></i> Battal Bazar, Warangal.
              </a>
            </p>

            <p>
              <a href="mailto:anupurampriyankavinod@gmail.com" target="_blank">
                <i class="fas fa-envelope mr-3"></i>
                anupurampriyankavinod@gmail.com
              </a>
            </p>

            <p>
              <a href="tel:+918686366009" target="_blank">
                <i class="fas fa-phone mr-3"></i> +91 86863 66009
              </a>
            </p>

            <p>
              <a href="https://wa.me/918686366009" target="_blank">
                <i class="fab fa-whatsapp mr-3"></i> +91 86863 66009
              </a>
            </p>
          </div>
          <hr class="w-100 clearfix d-md-none" />

          <div class="col-xl-4 col-lg-4 col-md-6 pt-1 pb-1">
            <h5
              class="text-uppercase mb-4 wow fadeIn text-center"
              data-wow-delay="0.3s"
            >
              <strong>Opening hours</strong>
            </h5>
            <table class="table wow fadeIn text-white" data-wow-delay="0.3s">
              <tbody>
                <tr>
                  <td>Mon - Sat:</td>

                  <td>9am - 10pm</td>
                </tr>

                <tr>
                  <td>Sunday:</td>

                  <td>10am - 6pm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </footer>
  );
}
