import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-wraper">
          <div className="footer-box">
            <div className="logo">
              <div className="logo-img">
                <img
                  src="https://shreethemes.in/doctris/assets/images/logo-icon.png"
                  alt=""
                />
              </div>
              <h2>SWASYA</h2>
            </div>
            <p>
              Great doctor if you need your family member to get effective
              immediate assistance, emergency treatment or a simple
              consultation.
            </p>
          </div>
          <div className="footer-box">
            <h4 className="footer-title">Departments</h4>
            <ul className="footer-links">
              <li>Eye Care</li>
              <li>Psychotherapy</li>
              <li>Dental Care</li>
              <li>Orthopedic</li>
              <li>Cardiology</li>
              <li>Neurology</li>
            </ul>
          </div>
          <div className="footer-box">
            <h4 className="footer-title">Company</h4>
            <ul className="footer-links">
              <li>
                <a>About Us</a>{" "}
              </li>
              <li>
                {" "}
                <a>Services</a>
              </li>
              <li>
                <a>Team</a>
              </li>
              <li>
                <a>Project</a>
              </li>
              <li>
                <a>Login</a>
              </li>
            </ul>
          </div>

          <div className="footer-box">
            <h4 className="footer-title">Contact us</h4>
            <ul className="footer-links">
              <li>
                <a>contact@example.com</a>
              </li>
              <li>+152 534-468-854</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
