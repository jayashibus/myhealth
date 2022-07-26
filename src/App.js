import "./App.css";
import logo from "./images/logo.png";
import Footer from "./Component/Footer";
import Team from "./Component/Team";
import Partners from "./Component/Partners";
import Client from "./Component/Client";

function App() {
  return (
    <div className="App">
      <header id="topHeader">
        <ul id="topInfo">
          <li>+65 93358594</li>
          <li>sales@myhealthsentinel.com</li>
        </ul>

        <nav>
          <span className="logo">
            <img src={logo} alt="Logo" style={{ height: "70px" }} />
          </span>
          <div className="menu-btn-3" onclick="menuBtnFunction(this)">
            <span></span>
          </div>
          <div className="mainMenu">
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
              <a href="/#" className="brand-btn">
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
        <h1 className="sec-heading">Company Profile</h1>
        <div className="col-5 delivery-img">
          <img
            src="https://www.dropbox.com/s/ipx91osglyczpdt/delivery_experience.svg?raw=1"
            alt="Productivity Delivering Experience"
            title="Delivering Experience Since 2009"
          />
        </div>
        <div className="col-7">
          <h2>
            myHealth Sentinel enables medical data connectivity in all
            Integrated Healthcare Organizations
          </h2>
          <p>
            <ul>
              <li>
                “TeleMetrix+” (TM+) is the first cloud-based commercial
                Telehealth service in Singapore.
              </li>
              <li>
                “DeviceConx” is one of the top Medical Device Integration
                solutions for hospitals in the USA.
              </li>
              <li>
                “Data Innovations laboratory middleware” is the world’s largest,
                clinical and blood laboratory middleware solution.
              </li>
              <li>
                IDA SBO dealer for communication devices and also a registered
                HSA Medical devices importer, wholesaler licence holder.
              </li>
            </ul>
          </p>
          <div className="btn-footer">
            <a href="/#" className="brand-btn">
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section id="services">
        <h1 className="sec-heading">Our Services</h1>
        <ul>
          <li>
            <div>
              <a href="/#">
                <i className="fas fa-h-square"></i>
                <span>Hospital</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/#">
                <i className="fas fa-flask"></i>
                <span>Laboratory</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/#">
                <i className="fas fa-plus-square"></i>
                <span>Acute Care</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/#">
                <i className="fab fa fa-stethoscope"></i>
                <span>GP Care</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/#">
                <i className="fas fa-user-md"></i>
                <span>Nursing</span>
              </a>
            </div>
          </li>
          <li>
            <div>
              <a href="/#">
                <i className="fas fa-home"></i>
                <span>Home</span>
              </a>
            </div>
          </li>
        </ul>

        <div id="service-footer">
          <a href="/#" className="brand-btn">
            View All Service
          </a>
        </div>
      </section>

      <section id="success-story">
        <h1 className="sec-heading">Our Success Stories</h1>

        <div className="slider">
          <div className="col-6 slide-text">
            <div>
              <h2>World Travel Protection</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <a href="/#" className="brand-btn">
                Contact Us
              </a>
            </div>
          </div>
          <div className="col-6 slide-img">
            <img
              src="https://www.dropbox.com/s/ipx91osglyczpdt/delivery_experience.svg?raw=1"
              alt="World Travel App Development"
              title="World Travel Protection"
            />
          </div>
        </div>
      </section>

      <Team />

      <section id="highlights">
        <h1 className="sec-heading">Company Highlights</h1>

        <div className="slider">
          <div className="col-6 slide-text">
            <div>
              <h2>Team iTechnology at IBM, Americas 2019, Los Angeles</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text.
              </p>
              <a href="/#" className="brand-btn">
                See More
              </a>
            </div>
          </div>
          <div className="col-6 slide-img">
            <img
              src="https://www.dropbox.com/s/vnkswx20c0dg5ta/analyzing.jpg?raw=1"
              alt="Team Work in Los Angeles"
              title="Company Team Work"
            />
          </div>
        </div>
      </section>

      <Partners />
      <Client />
      <Footer />
    </div>
  );
}

export default App;
