import { React, useState } from "react";
import "./Featureshow.css";
import ScreenText from "./ScreenText.js";
import img1 from "../images/Designer (2) (7).svg";
import img2 from "../images/Saving money-amico.svg";
import img3 from "../images/location.svg";

const scrollData = [
  {
    heading: "Track your each Rupee with Bills",
    description:
      "Securely Pool Bills for Smooth Transactions and Strengthen Friendships",
    lappy_img: img1,
  },
  {
    heading: "Enhance Financial Bonds",
    description:
      "Get your money back with the periodic interest by enabling Financial bonds",
    lappy_img: img2,
  },
  {
    heading: "Split Expenses Smoothly",
    description:
      "Effortlessly divide and manage expenses among friends while maintaining transparency and trust. Bills for Smooth Transactions and Strengthen Friendships",
    lappy_img: img1,
  },
];
const MobileScroll = () => {
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
