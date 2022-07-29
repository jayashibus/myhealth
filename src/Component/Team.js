import React from "react";
import javin from "../images/javin.jpeg";

const Team = () => {
  return (
    <div>
      <section id="team" className="team content-section">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h2>Our Team</h2>
              <h3 className="caption gray">
                Meet the people who make awesome stuffs
              </h3>
            </div>

            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="team-member">
                    <figure>
                      <img
                        src={javin}
                        alt="Thumbanial"
                        className="img-responsive"
                      />
                      <figcaption>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Recusandae asperiores mollitia.
                        </p>
                        <ul>
                          <li>
                            <a href="/#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4>Jack</h4>
                    <p className="team-designation">Director</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="team-member">
                    <figure>
                      <img
                        src={javin}
                        alt="Thumbanial"
                        className="img-responsive"
                      />
                      <figcaption>
                        <p>
                          Neque minima ea, a praesentium saepe nihil maxime quod
                          esse numquam explicabo eligendi.
                        </p>
                        <ul>
                          <li>
                            <a href="/#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4>Javin Lee</h4>
                    <p className="team-designation">Product Manager</p>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="team-member">
                    <figure>
                      <img
                        src={javin}
                        alt="Thumbanial"
                        className="img-responsive"
                      />
                      <figcaption>
                        <p>
                          Temporibus dolor, quisquam consectetur molestias,
                          veniam voluptatum. Beatae alias omnis totam.
                        </p>
                        <ul>
                          <li>
                            <a href="/#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="/#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4>Shibu</h4>
                    <p className="team-designation">Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
