import React from "react";

export default function App() {
  return (
    <div>
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <a href="https://www.linkedin.com/in/mendereskoc/">
          <img
            src="https://img.icons8.com/color/48/000000/linkedin.png"
            alt="LinkedIn"
            class="icon"
          />
        </a>
      </a>
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <a href="https://github.com/MenderesKoc">
          <img
            src="https://img.icons8.com/material-outlined/48/000000/github.png"
            alt="Github"
            class="icon"
          />
        </a>
      </a>
      <a
        className="btn btn-outline-light btn-floating m-1"
        href="#!"
        role="button"
      >
        <a href="https://twitter.com/Mendereskoc4">
          <img
            src="https://img.icons8.com/color/48/000000/twitter.png"
            alt="Twitter"
            class="icon"
          />
        </a>
      </a>
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2020 Copyright:Menderes Koc
      </div>
    </div>
  );
}
