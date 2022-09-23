import React from "react";
import NantLogo from "../images/NantHealth.jpeg";
import Fora from "../images/fora.png";
import Amron from "../images/amron.svg.png";
import Isansys from "../images/isansys.jpeg";
const Client = () => {
  return (
    <div>
      <section id="topList" className="brand-logos">
        <h1 className="sec-heading">
          Recognition as Top Mobile Development Company
        </h1>
        <div>
          <a href="/#">
            <img
              src={NantLogo}
              alt="Top 10 MobleApp Development Companies"
              title="Top 10 MobleApp Development Companies"
            />
            <span>Recognised Among Top 10 MobleApp Development Companies</span>
          </a>
          <a href="/#">
            <img
              src={Fora}
              alt="Top 10 MobleApp Development Companies"
              title="Top 10 MobleApp Development Companies"
            />
            <span>Recognised Among Top 10 MobleApp Development Companies</span>
          </a>
          <a href="/#">
            <img
              src={Amron}
              alt="Top 10 MobleApp Development Companies"
              title="Top 10 MobleApp Development Companies"
            />
            <span>Recognised Among Top 10 MobleApp Development Companies</span>
          </a>
          <a href="/#">
            <img
              src={Isansys}
              alt="Top 10 MobleApp Development Companies"
              title="Top 10 MobleApp Development Companies"
            />
            <span>Recognised Among Top 10 MobleApp Development Companies</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Client;
