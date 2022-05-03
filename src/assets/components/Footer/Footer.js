import React from "react";
import "./Footer.scss";
import audiophile from "./../../images/client-audiophile.svg";
import databiz from "./../../images/client-databiz.svg";
import maker from "./../../images/client-maker.svg";
import meet from "./../../images/client-meet.svg";

export default function Footer() {
  return (
    <div className="footer">
      <img src={databiz} alt="databiz" className="footer-item" />
      <img src={audiophile} alt="audiophile" className="footer-item" />
      <img src={meet} alt="meet" className="footer-item" />
      <img src={maker} alt="maker" className="footer-item" />
    </div>
  );
}
