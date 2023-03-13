import React from "react";
import { Article } from "../../components";
import "./blog.css";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";

const blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article
            imgUrl={blog01}
            date="Sept 25 2022"
            title="GPT-3 and Open AI is the future. Explore it with us."
          />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article
            imgUrl={blog02}
            date="Sept 25 2022"
            title="GPT-3 and Open AI is the future. Explore it with us."
          />
          <Article
            imgUrl={blog03}
            date="Sept 25 2022"
            title="GPT-3 and Open AI is the future. Explore it with us."
          />
          <Article
            imgUrl={blog04}
            date="Sept 25 2022"
            title="GPT-3 and Open AI is the future. Explore it with us."
          />
          <Article
            imgUrl={blog05}
            date="Sept 25 2022"
            title="GPT-3 and Open AI is the future. Explore it with us."
          />
        </div>
      </div>
    </div>
  );
};

export default blog;
