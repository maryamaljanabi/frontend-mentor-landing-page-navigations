import React from "react";
import "./ContentImage.scss";

export default function ContentImage({ image }) {
  return (
    <div className="content-image">
      <img src={image} alt="main" className="main-image" />
    </div>
  );
}
