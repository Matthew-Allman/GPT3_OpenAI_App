import React from "react";
import "./features.css";
import { Feature } from "../../components";

const featuresData = [
  {
    title: "Improving end distrusts instantly",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },

  {
    title: "Become the tended active",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },

  {
    title: "Message or am nothing",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },

  {
    title: "Really troll text country",
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

const Features = () => {
  return (
    <div className="gpt3__features section__padding" id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">
          The Future is Now and You Just Need to Realize it. Step into the
          Future Today & Make it Happen.
        </h1>
        <p>Request Early Access to Get Started</p>
      </div>
      <div className="gpt3__featues-container">
        {featuresData.map((item, index) => (
          <Feature
            title={item.title}
            text={item.text}
            key={item.title + index}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
