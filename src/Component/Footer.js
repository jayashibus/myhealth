import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <span className="logo">MyHealth Sentinel</span>
        </div>

        <div className="row">
          <div className="col-3">
            <span className="footer-cat">Product & Solution</span>
            <ul className="footer-cat-links">
              <li>
                <a href="/#">
                  <span>TeleMetrix+</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Isansys’ Patient Monitoring Platform</span>
                </a>
              </li>

              <li>
                <a href="/#">
                  <span>Laboratory Middleware</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <span className="footer-cat">About Us</span>
            <ul className="footer-cat-links">
              <li>
                <a href="/#">
                  <span>Corporate Profile</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Vision & Core Values</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Core Competencies</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Corporate Milestones</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Corporate Structure</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <span className="footer-cat">Quick Links</span>
            <ul className="footer-cat-links">
              <li>
                <a href="/#">
                  <span>Reviews</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Terms & Condition</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Disclaimer</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Site Map</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-3" id="newsletter">
            <span className="footer-cat">Stay Connected</span>
            <form id="subscribe">
              <input
                type="email"
                id="subscriber-email"
                placeholder="Enter Email Address"
              />
              <input type="submit" value="Subscribe" id="btn-scribe" />
            </form>

            <div className="social-links social-2">
              <a href="/#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="/#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="/#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="/#">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="/#">
                <i className="fab fa-tumblr"></i>
              </a>
              <a href="/#">
                <i className="fab fa-reddit-alien"></i>
              </a>
            </div>

            <div id="address">
              <span className="footer-cat">Office Location</span>
              <ul>
                <li>
                  <i className="far fa-building"></i>
                  <div>
                    UBI Techpark
                    <br />
                    Lobby E, Singapore
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="social-links social-1 col-6">
            <a href="/#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="/#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="/#">
              <i className="fab fa-tumblr"></i>
            </a>
            <a href="/#">
              <i className="fab fa-reddit-alien"></i>
            </a>
          </div>
        </div>
        <div id="copyright">&copy; All Rights Reserved 201-2020</div>
        <div id="owner">
          <span>
            Designed by
            <a href="https://www.myhealthsentinel.com/">
              MyHealth Sentinel Holding Pte Ltd
            </a>
          </span>
        </div>
        <a href="#topHeader" id="gotop">
          Top
        </a>
      </footer>
    </div>
  );
};

export default Footer;
