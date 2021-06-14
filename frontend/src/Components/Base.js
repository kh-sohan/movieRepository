import React from "react";

const Base = ({
  title = "Movie Repo Project by Sohan",
  description = "My desription",
  className = "bg-dark text-white p-4",
  children
}) => (
  <div>
    <div className="container-fluid">
      <div className="jumbotron bg-dark text-white text-center">
        <h2 className="display-4">{title}</h2>
        <p className="lead">{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
    <footer className="page-footer font-small unique-color-dark pt-4">
    <div className="container">
      <ul className="list-unstyled list-inline text-center py-2">
      <li className="list-inline-item">
        <h5 className="mb-1">Thanks for visiting!</h5>
      </li>
    </ul>
    </div>
    </footer>
  </div>
);

export default Base;
