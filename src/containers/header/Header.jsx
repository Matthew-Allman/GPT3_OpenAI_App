import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">
          Let's Build Something amazing with GPT-3 OpenAI
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          qui voluptatem quam, aperiam molestias neque eius exercitationem?
          Distinctio maiores quos repellat praesentium esse adipisci. At, ipsa
          vel. Voluptate odit consequuntur ipsum magnam non tempore, dolore,
          modi ipsam distinctio recusandae alias!
        </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder="Enter Your Email Address" />
          <button type="button">Get Started</button>
        </div>
        <div className="gpt3__header-content__people">
          <img src={people} alt="People" />
          <p>1,600 requested access or a visit in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="AI" />
      </div>
    </div>
  );
};

export default Header;
