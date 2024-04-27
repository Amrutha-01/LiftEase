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

function App() {
  const getRideData = {
    title: "How LifeEase Works?",
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
    title: "How LifeEase Works?",
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
                <MobileScroll />
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
                <MobileScroll />
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
