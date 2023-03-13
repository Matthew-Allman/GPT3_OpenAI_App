import React from "react";
import "./brand.css";

import { google, slack, atlassian, dropbox, shopify } from "./imports";

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div>
        <img src={google} alt="Google" className="highlight" />
      </div>
      <div>
        <img src={slack} alt="slack" className="highlight" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" className="highlight" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" className="highlight" />
      </div>
      <div>
        <img src={shopify} alt="shopify" className="highlight" />
      </div>
    </div>
  );
};

export default Brand;
