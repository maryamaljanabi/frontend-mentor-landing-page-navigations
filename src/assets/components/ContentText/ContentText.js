import React from "react";
import Footer from "../Footer/Footer";
import "./ContentText.scss";
import Media from "react-media";

export default function ContentText() {
  return (
    <div className="content-text">
      <Media query="(min-width: 1150px)">
        {(matches) => (
          <>
            {matches ? (
              <h1>
                Make
                <br /> remote work
              </h1>
            ) : (
              <h1> Make remote work</h1>
            )}
          </>
        )}
      </Media>

      <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>

      <div className="button">Learn more</div>

      <Footer />
    </div>
  );
}
