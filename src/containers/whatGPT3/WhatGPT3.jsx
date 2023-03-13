import React from "react";
import { Feature } from "../../components";
import "./whatgpt3.css";

const WhatGPT3 = () => {
  return (
    <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
      <div className="gpt3__whatgpt3-feature">
        <Feature
          title="What is GPT3"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec tortor quis neque interdum blandit. Ut ante lorem, facilisis at facilisis a, elementum non dolor. Proin pretium egestas quam, sit amet lobortis libero sodales a."
        />
      </div>
      <div className="gpt3__whatgpt3-heading">
        <h1 className="gradient__text">
          The possibilities are beyond your imagination
        </h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgpt3-container">
        <Feature
          title="Chatbots"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. More random lorem ipsum text that I am currently typing out cuz I am too lazy to get it."
        />
        <Feature
          title="Knowledge Base"
          text="More lorem text but I will not spend long on this cuz it is rather late."
        />
        <Feature
          title="Education"
          text="This is the text made for the education feature section and the paragraph is almost done right now."
        />
      </div>
    </div>
  );
};

export default WhatGPT3;
