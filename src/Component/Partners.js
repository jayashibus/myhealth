import React from "react";
import nuhlogo from "../images/nuh-logo.png";
import jhlogo from "../images/jh.png";
import sglogo from "../images/sgh.png";
import ahlogo from "../images/AH.png";
import ntfgh from "../images/NTFGH.png";
import MAlogo from "../images/mountAlvernia.jpeg";
import bvhlogo from "../images/bvh.png";

const Partners = () => {
  return (
    <div>
      <section id="partners" className="brand-logos height">
        <h1 className="sec-heading">Our Partners</h1>
        <div>
          <a href="/#">
            <img src={nuhlogo} alt="Work with AWS" title="Our Work" />
          </a>
          <a href="/#">
            <img src={jhlogo} alt="Dell" title="Work with Dell" />
          </a>
          <a href="/#">
            <img src={sglogo} alt="intel" title="Work with intell" />
          </a>
          <a href="/#">
            <img src={ahlogo} alt="IBM" title="Work with IBM" />
          </a>
          <a href="/#">
            <img src={MAlogo} alt="Nasscom" title="Work with Nasscom" />
          </a>
          <a href="/#">
            <img src={ntfgh} alt="Microsoft" title="Work with Microsoft" />
          </a>
          <a href="/#">
            <img src={bvhlogo} alt="Nvidia" title="Work with Nvidia" />
          </a>{" "}
        </div>
      </section>
    </div>
  );
};

export default Partners;
