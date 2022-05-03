import React from "react";
import mainImage from "./../../images/image-hero-desktop.png";
import "./ContentImage.scss";

export default function ContentImage() {
  return (
    <div className="content-image">
      <img src={mainImage} alt="main-image" className="main-image" />
    </div>
  );
}
