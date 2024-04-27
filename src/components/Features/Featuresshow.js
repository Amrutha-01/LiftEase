import { React, useState } from "react";
import "./Featureshow.css";
import ScreenText from "./ScreenText.js";

const MobileScroll = ({ scrollData }) => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="max-width flex mobile-scroll">
      <div className="scroll-full-screen-wrapper">
        {scrollData.map((screen, i) => (
          <div className="scroll-full-screen">
            <ScreenText screen={screen} i={i} setCurrentImg={setCurrentImg} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex absolute-center">
            <img
              src={scrollData[currentImg].lappy_img}
              className="mobile-screen-img slide-in-right"
              key={scrollData[currentImg].lappy_img}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
