import React from "react";
import "./Blog.scss";

const Blog = ({ title, content }) => {
  return (
    <div className="blog-container">
      <div className="blog-post">
        <h3>{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Blog;
