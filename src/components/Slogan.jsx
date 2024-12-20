import React from "react";

export default function Slogan() {
  return (
    <div>
      <div class="container-fluid py-5" style={{ background: "#b1bace" }}>
        <div class="flex-center">
          <ul class="list-unstyled">
            <li>
              <h3
                class="h3-responsive mt-5 white-text wow fadeIn"
                data-wow-delay="0.2s"
              >
                <i class="fas fa-quote-left" aria-hidden="true"></i> The most
                beautiful makeup of a woman is passion. But cosmetics are easier
                to buy. <i class="fas fa-quote-right" aria-hidden="true"></i>
              </h3>
            </li>

            <li>
              <h4
                class="font-italic mt-4 white-text wow fadeIn"
                data-wow-delay="0.4s"
              >
                ~ Yves Saint-Laurent
              </h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
