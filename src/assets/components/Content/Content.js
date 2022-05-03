import React from "react";
import ContentImage from "../ContentImage/ContentImage";
import ContentText from "../ContentText/ContentText";
import "./Content.scss";

export default function Content() {
  return (
    <div className="content">
      <ContentText />
      <ContentImage />
    </div>
  );
}
