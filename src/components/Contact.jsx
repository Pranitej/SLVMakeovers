import React from "react";

export default function Contact() {
  return (
    <div className="container-fluid" id="contact">
      <section class="section mb-5 pb-5">
        <h1
          class="section-heading text-center mb-5 pt-5 black-text wow fadeIn"
          data-wow-delay="0.2s"
        >
          Contact
        </h1>
        <p
          class="text-center w-responsive mx-auto mb-4 black-text wow fadeIn"
          data-wow-delay="0.2s"
        >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error
          amet numquam iure provident voluptate esse quasi, veritatis totam
          voluptas nostrum quisquam eum porro a pariatur accusamus veniam.
        </p>

        <div class="row wow fadeIn" data-wow-delay="0.4s">
          <div class="col-md-8 offset-xl-1 mb-2">
            <form class="text-center">
              <div class="row">
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <div class="md-form mb-0">
                      <input type="text" id="form41" class="form-control" />

                      <label for="form41" class="">
                        Your name
                      </label>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="md-form mb-0">
                    <div class="md-form mb-0">
                      <input type="text" id="form52" class="form-control" />

                      <label for="form52" class="">
                        Your email
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <input type="text" id="form51" class="form-control" />

                    <label for="form51" class="">
                      Subject
                    </label>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-12">
                  <div class="md-form mb-0">
                    <textarea
                      type="text"
                      id="form76"
                      class="md-textarea form-control"
                      rows="3"
                    ></textarea>

                    <label for="form76">Your message</label>
                  </div>
                </div>
              </div>
            </form>

            <div class="text-center text-md-left mt-4">
              <a class="btn btn-default">Send</a>
            </div>
          </div>
          <div class="col-md-4 col-xl-3">
            <ul class="contact-icons list-unstyled text-center">
              <li>
                <i class="fas fa-map-marker-alt fa-2x"></i>

                <p>New York, NY 10012, USA</p>
              </li>

              <li>
                <i class="fas fa-phone fa-2x"></i>

                <p>+ 01 234 567 89</p>
              </li>

              <li>
                <i class="fas fa-envelope fa-2x"></i>

                <p>contact@mdbootstrap.com</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
