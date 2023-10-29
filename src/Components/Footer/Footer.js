import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h3 className="h3"> ㅤ </h3>
            <ul className="ul">
              <li>Privacy</li>
              <li>Accesibility</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="footer-col">
            <h5 className="h5"> Developed by </h5>
            <ul className="ul">
              <li>Santiago Ignacio Caso</li>
              <li>Mora Vallejos</li>
            </ul>
          </div>
          <div className="footer-col">
            <h5> Contact us! </h5>
            <ul className="ul">
              <li className="li-font">
                <img src="/images/twitter-logo.png" /> Twitter{" "}
              </li>
              <li className="li-font">
                <img src="/images/facebook-logo.png" /> Facebook{" "}
              </li>
              <li className="li-font">
                <img className="img" src="/images/instagram-logo.png" />{" "}
                Instagram{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
