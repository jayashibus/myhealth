import "./App.css";
import logo from "./images/logo.png";
import Footer from "./Component/Footer";

function App() {
  return (
    <div className="App">
      <header id="topHeader">
        <ul id="topInfo">
          <li>+65 93358594</li>
          <li>sales@myhealthsentinel.com</li>
        </ul>

        <nav>
          <span class="logo">
            <img src={logo} alt="Logo" />
          </span>
          <div class="menu-btn-3" onclick="menuBtnFunction(this)">
            <span></span>
          </div>
          <div class="mainMenu">
            <a href="/#">
              <span>Home</span>
            </a>
            <a href="/#">
              <span>About Us</span>
            </a>
            <a href="/#">
              <span>Products & Solutions</span>
            </a>

            <a href="/#">
              <span>Sustainability</span>
            </a>
            <a href="/#">
              <span>Join Us</span>
            </a>

            <a href="/#">Contact US</a>
          </div>
        </nav>
      </header>

      <section id="intro">
        <div id="intro-info">
          <div>
            <h1>TM+ Telehealth APP</h1>
            <div id="intro-tag-btn">
              <span>
                Over 6K app downloads across world wide.For Family caregiver, a
                simple to use mobile apps to monitor the health of the loved
                ones with competitive pricing
              </span>
              <a href="/#" class="brand-btn">
                Let's Talk
              </a>
            </div>
          </div>
        </div>

        <div id="development-img">
          <img
            src="https://www.dropbox.com/s/7hwnjccu15vt90e/mobileDevlopment.svg?raw=1"
            alt="Mobile App Development"
            title="Mobile App Development"
          />
        </div>
      </section>

      <section id="delivery">
        <h1 class="sec-heading">Company Profile</h1>
        <div class="col-5 delivery-img">
          <img
            src="https://www.dropbox.com/s/ipx91osglyczpdt/delivery_experience.svg?raw=1"
            alt="Productivity Delivering Experience"
            title="Delivering Experience Since 2009"
          />
        </div>
        <div class="col-7">
          <h2>
            myHealth Sentinel enables medical data connectivity in all
            Integrated Healthcare Organizations
          </h2>
          <p>
            <ul>
              <li>
                “TeleMetrix+” (TM+) is the first cloud-based commercial
                Telehealth service in Singapore. TM+ is developed and owned by
                mHS.
              </li>
              <li>
                “DeviceConx” is one of the top Medical Device Integration
                solutions for hospitals in the USA.
              </li>
              <li>
                “Data Innovations laboratory middleware” is the world’s largest,
                clinical and blood laboratory middleware solution.
              </li>
            </ul>
          </p>
          <div class="btn-footer">
            <a href="/#" class="brand-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section id="services">
        <h1 class="sec-heading">Our Services</h1>
        <ul>
          <li>
            <div>
              <a href="/#">
                <i class="fas fa-laptop"></i>
                <span>Stratagy and Consultant</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/#">
                <i class="fas fa-users"></i>
                <span>User Experience Design</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/#">
                <i class="fas fa-mobile-alt"></i>
                <span>Mobile App Development</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/#">
                <i class="fab fa-chrome"></i>
                <span>Web App Development</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/#">
                <i class="fas fa-ribbon"></i>
                <span>Quality Analysis and Testing</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/#">
                <i class="fas fa-ticket-alt"></i>
                <span>Application Management & Support</span>
              </a>
            </div>
          </li>
        </ul>

        <div id="service-footer">
          <a href="/#" class="brand-btn">
            View All Service
          </a>
        </div>
      </section>

      <section id="success-story">
        <h1 class="sec-heading">Our Success Stories</h1>

        <div class="slider">
          <div class="col-6 slide-text">
            <div>
              <h2>World Travel Protection</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <a href="/#" class="brand-btn">
                Contact Us
              </a>
            </div>
          </div>
          <div class="col-6 slide-img">
            <img
              src="https://www.dropbox.com/s/ipx91osglyczpdt/delivery_experience.svg?raw=1"
              alt="World Travel App Development"
              title="World Travel Protection"
            />
          </div>
        </div>
      </section>

      <section id="revenue" class="brand-logos">
        <h1 class="sec-heading">
          We Drive Growth & Revenue for the Best Companies
        </h1>
        <div>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/lmvtthec9yn0ti6/Allianz.png?raw=1"
              alt="Allianz"
              title="Work with Allianz"
            />
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/kotgq2u4qr34i2u/audi.jpg?raw=1"
              alt="Audi"
              title="Work with Audi"
            />
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/t5dapt3lkz7rdhe/BMW.png?raw=1"
              alt="BMW"
              title="Work with BMW"
            />
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/ocqbsbgj590ztyy/ESPN.png?raw=1"
              alt="ESPN"
              title="Work with ESPN"
            />
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/2maaqxijcmbaqxg/LG.png?raw=1"
              alt="LG"
              title="Work with LG"
            />
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/yn3gj203hrdjfu7/Logo_NIKE.png?raw=1"
              alt="Nike"
              title="Work with Nike"
            />
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/gfxa6exv7h1ro6q/Suzuki_logo.png?raw=1"
              alt="Suzuki"
              title="Work with Suzuki"
            />
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/b7vwmjf6e0owybv/Visa.svg?raw=1"
              alt="Visa"
              title="Work with Visa"
            />
          </a>
        </div>
      </section>

      <section id="team" class="team content-section">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-12">
              <h2>Our Team</h2>
              <h3 class="caption gray">
                Meet the people who make awesome stuffs
              </h3>
            </div>

            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <div class="team-member">
                    <figure>
                      <img
                        src="http://www.mauritiusdsilva.com/themes/hallooou/assets/images/lauren-cox.jpg"
                        alt=""
                        class="img-responsive"
                      />
                      <figcaption>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Recusandae asperiores mollitia.
                        </p>
                        <ul>
                          <li>
                            <a href="/#">
                              <i class="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <i class="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <i class="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4>Lauren Cox</h4>
                    <p>Creative Director</p>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="team-member">
                    <figure>
                      <img
                        src="http://www.mauritiusdsilva.com/themes/hallooou/assets/images/jessie-barnett.jpg"
                        alt=""
                        class="img-responsive"
                      />
                      <figcaption>
                        <p>
                          Neque minima ea, a praesentium saepe nihil maxime quod
                          esse numquam explicabo eligendi.
                        </p>
                        <ul>
                          <li>
                            <a href="/#">
                              <i class="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <i class="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <i class="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4>Jessie Barnett</h4>
                    <p>UI/UX Designer</p>
                  </div>
                </div>

                <div class="col-md-4">
                  <div class="team-member">
                    <figure>
                      <img
                        src="http://www.mauritiusdsilva.com/themes/hallooou/assets/images/terry-fletcher.jpg"
                        alt=""
                        class="img-responsive"
                      />
                      <figcaption>
                        <p>
                          Temporibus dolor, quisquam consectetur molestias,
                          veniam voluptatum. Beatae alias omnis totam.
                        </p>
                        <ul>
                          <li>
                            <a href="/#">
                              <i class="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <i class="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <i class="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4>Terry Fletcher</h4>
                    <p>Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="highlights">
        <h1 class="sec-heading">Company Highlights</h1>

        <div class="slider">
          <div class="col-6 slide-text">
            <div>
              <h2>Team iTechnology at IBM, Americas 2019, Los Angeles</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <a href="/#" class="brand-btn">
                See More
              </a>
            </div>
          </div>
          <div class="col-6 slide-img">
            <img
              src="https://www.dropbox.com/s/vnkswx20c0dg5ta/analyzing.jpg?raw=1"
              alt="Team Work in Los Angeles"
              title="Company Team Work"
            />
          </div>
        </div>
      </section>

      <section id="partners" class="brand-logos">
        <h1 class="sec-heading">Our Partners</h1>
        <div>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/mk5ca04seizpf8l/aws.svg?raw=1"
              alt="Work with AWS"
              title="Our Work"
            />
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/r9utt5nj9k9m1t8/Dell.png?raw=1"
              alt="Dell"
              title="Work with Dell"
            />
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/umw9g0zgm1ecfvn/Intel.png?raw=1"
              alt="intel"
              title="Work with intell"
            />
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/x0hrha2dosey99z/ibm.png?raw=1"
              alt="IBM"
              title="Work with IBM"
            />
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/ekzu1wcki6jziay/Microsoft.svg?raw=1"
              alt="Microsoft"
              title="Work with Microsoft"
            />
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/lvl5cp14i3v0wgi/Nasscom.png?raw=1"
              alt="Nasscom"
              title="Work with Nasscom"
            />
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/h66k9jaaknxaum4/Samsung.png?raw=1"
              alt="Samsung"
              title="Work with Samsung"
            />
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/86cbtf78khj0q9z/Nvidia.png?raw=1"
              alt="Nvidia"
              title="Work with Nvidia"
            />
          </a>{" "}
        </div>
      </section>

      <section id="topList" class="brand-logos">
        <h1 class="sec-heading">
          Recognition as Top Mobile Development Company
        </h1>
        <div>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/19czj59oq0orbfa/tm.png?raw=1"
              alt="Top 10 MobleApp Development Companies"
              title="Top 10 MobleApp Development Companies"
            />
            <span>Recognised Among Top 10 MobleApp Development Companies</span>
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/130734rofy1f261/tata.png?raw=1"
              alt="Top 10 MobleApp Development Companies"
              title="Top 10 MobleApp Development Companies"
            />
            <span>Recognised Among Top 10 MobleApp Development Companies</span>
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/k17kwv9hiu9w98d/Infosys_logo.png?raw=1"
              alt="Top 10 MobleApp Development Companies"
              title="Top 10 MobleApp Development Companies"
            />
            <span>Recognised Among Top 10 MobleApp Development Companies</span>
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/mm4cnforc4pvwac/Wipro_Logo.png?raw=1"
              alt="Top 10 MobleApp Development Companies"
              title="Top 10 MobleApp Development Companies"
            />
            <span>Recognised Among Top 10 MobleApp Development Companies</span>
          </a>
          <a href="/#">
            <img
              src="https://www.dropbox.com/s/n4scpig8b3tfqkq/Amazon_logo.svg?raw=1"
              alt="Top 10 MobleApp Development Companies"
              title="Top 10 MobleApp Development Companies"
            />
            <span>Recognised Among Top 10 MobleApp Development Companies</span>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
