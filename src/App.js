import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// import LandingPage from './components/LandingPage/LandingPage';
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import GetRide from "./components/GetRide/GetRidePage/GetRide";
import Footer from "./components/Footer/Footer";
import GiveRide from "./components/GiveRide/GiveRide";
import LEWorkGet from "./components/LEWorkGet/LEWorkGet";
import MobileScroll from "./components/Features/Featuresshow";
import money from "./components/images/Designer (2).png";
import img1 from "./components/images/Designer (2) (7).svg";
import img2 from "./components/images/Saving money-amico.svg";
import img3 from "./components/images/location.svg";

function App() {
  const getRideData = {
    title: "How LiftEase Works?",
    description:
      "Tempor reprehenderit nostrud anim aute pariatur elit cillum excepteur ad culpa nisi. Eu amet anim deserunt veniam irure excepteur laborum in. Reprehenderit consequat adipisicing eu nostrud et pariatur eu id et nisi voluptate. Voluptate minim ullamco nostrud adipisicing sit officia cupidatat do non labore dolore adipisicing cupidatat. Pariatur labore sunt laboris anim laborum non.",
    cardsData: [
      {
        cardTitle: "EARN",
        cardDescription: "Earn credit points for giving a lift",
        CardImg: money,
      },
      {
        cardTitle: "EARN",
        cardDescription: "Earn credit points for giving a lift",
        CardImg: money,
      },
      {
        cardTitle: "EARN",
        cardDescription: "Earn credit points for giving a lift",
        CardImg: money,
      },
    ],
  };
  const giveRideData = {
    title: "How LiftEase Works?",
    description:
      "Tempor reprehenderit nostrud anim aute pariatur elit cillum excepteur ad culpa nisi. Eu amet anim deserunt veniam irure excepteur laborum in. Reprehenderit consequat adipisicing eu nostrud et pariatur eu id et nisi voluptate. Voluptate minim ullamco nostrud adipisicing sit officia cupidatat do non labore dolore adipisicing cupidatat. Pariatur labore sunt laboris anim laborum non.",
    cardsData: [
      {
        cardTitle: "EARN",
        cardDescription: "Earn credit points for giving a lift",
        CardImg: money
      },
      {
        cardTitle: "EARN",
        cardDescription: "Earn credit points for giving a lift",
        CardImg: money
      },
      {
        cardTitle: "EARN",
        cardDescription: "Earn credit points for giving a lift",
        CardImg: money
      },
    ],
  };
  const getRideScroll = [
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
      lappy_img: img3,
    },
  ];
  const giveRideScroll = [
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
      lappy_img: img3,
    },
  ];
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route
            path="/getRide"
            element={
              <div>
                <Navbar />
                <GetRide />
                <MobileScroll scrollData={getRideData}/>
                <LEWorkGet data={getRideData} />
                <Footer />
              </div>
            }
          />
          <Route
            path="/giveRide"
            element={
              <div>
                <Navbar />
                <GiveRide />
                <MobileScroll scrollData={giveRideScroll}/>
                <LEWorkGet data={giveRideData} />
                <Footer />
              </div>
            }
          />
        </Routes>
      </Router>
      {/* <MainPage/> */}
    </div>
  );
}

export default App;
