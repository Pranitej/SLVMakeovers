import React, { useRef } from "react";

export default function Navbar() {
  // Create a ref for the collapsible navbar
  const navbarTogglerRef = useRef(null);

  // Function to collapse the navbar when an item is clicked
  const handleNavItemClick = (event) => {
    event.preventDefault();

    // Collapse the navbar if it's expanded
    if (navbarTogglerRef.current.classList.contains("show")) {
      navbarTogglerRef.current.classList.remove("show");
    }

    // Get the target section
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    // Adjust scroll position based on the navbar height
    const navbarHeight = document.querySelector(".navbar").offsetHeight;
    const targetPosition = targetElement.offsetTop - navbarHeight;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });
  };

  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark fixed-top scrolling-navbar">
        <div className="container smooth-scroll">
          <a
            className="navbar-brand"
            href="#home" // Update href to match the id of the section you want to scroll to
            onClick={handleNavItemClick} // Add smooth scroll handler to navbar-brand
          >
            SLV Makeovers
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarTogglerDemo02"
            ref={navbarTogglerRef}
          >
            <ul className="navbar-nav mr-auto smooth-scroll">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#beauty"
                  data-offset="110"
                  onClick={handleNavItemClick}
                >
                  Beauty
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                  data-offset="110"
                  onClick={handleNavItemClick}
                >
                  About
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  data-offset="110"
                  onClick={handleNavItemClick}
                >
                  Contact
                </a>
              </li>
            </ul>
            <ul className="navbar-nav nav-flex-icons">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.facebook.com/share/5rRc6y8XG1YTDs6n/"
                  target="_blank"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://www.instagram.com/_.slv_makeovers._/profilecard/?igsh=MWN0ZGhscnJxcG04Mg%3D%3D"
                  target="_blank"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://maps.app.goo.gl/TxESKhtzgyVKivVe9"
                  target="_blank"
                >
                  <i class="fa fa-location-arrow" aria-hidden="true"></i>
                </a>
              </li>

              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://wa.me/918686366009"
                  target="_blank"
                >
                  <i class="fab fa-whatsapp mr-3"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
