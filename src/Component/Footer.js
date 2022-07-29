import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div>
          <span class="logo">MyHealth Sentinel</span>
        </div>

        <div class="row">
          <div class="col-3">
            <span class="footer-cat">Solution</span>
            <ul class="footer-cat-links">
              <li>
                <a href="/#">
                  <span>Isansys’ Patient Monitoring Platform</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>TeleMetrix+</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Laboratory Middleware</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-3">
            <span class="footer-cat">Industries</span>
            <ul class="footer-cat-links">
              <li>
                <a href="/#">
                  <span>Healthcare</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Sports</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>ECommerce</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Construction</span>
                </a>
              </li>
              <li>
                <a href="/#">
                  <span>Club</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="col-3">
            <span class="footer-cat">Quick Links</span>
            <ul class="footer-cat-links">
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
          <div class="col-3" id="newsletter">
            <span class="footer-cat">Stay Connected</span>
            <form id="subscribe">
              <input
                type="email"
                id="subscriber-email"
                placeholder="Enter Email Address"
              />
              <input type="submit" value="Subscribe" id="btn-scribe" />
            </form>

            <div class="social-links social-2">
              <a href="/#">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="/#">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="/#">
                <i class="fab fa-linkedin-in"></i>
              </a>
              <a href="/#">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="/#">
                <i class="fab fa-tumblr"></i>
              </a>
              <a href="/#">
                <i class="fab fa-reddit-alien"></i>
              </a>
            </div>

            <div id="address">
              <span class="footer-cat">Office Location</span>
              <ul>
                <li>
                  <i class="far fa-building"></i>
                  <div>
                    UBI Techpark
                    <br />
                    Lobby E, Singapore
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="social-links social-1 col-6">
            <a href="/#">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="/#">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="/#">
              <i class="fab fa-linkedin-in"></i>
            </a>
            <a href="/#">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="/#">
              <i class="fab fa-tumblr"></i>
            </a>
            <a href="/#">
              <i class="fab fa-reddit-alien"></i>
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
