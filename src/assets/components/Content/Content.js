import React from "react";
import ContentImage from "../ContentImage/ContentImage";
import ContentText from "../ContentText/ContentText";
import "./Content.scss";
import Media from "react-media";
import mainImage from "./../../images/image-hero-desktop.png";
import mainImageMobile from "./../../images/image-hero-mobile.png";

export default function Content() {
  return (
    <Media query="(min-width: 1150px)">
      {(matches) => (
        <>
          {matches ? (
            <div className="content">
              <ContentText />
              <ContentImage image={mainImage} />
            </div>
          ) : (
            <div className="content-mobile">
              <ContentImage image={mainImageMobile} />
              <ContentText />
            </div>
          )}
        </>
      )}
    </Media>
  );
}
