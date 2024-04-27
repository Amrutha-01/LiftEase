import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
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
import first from "./components/images/1st box.png";
import mid from "./components/images/middle box.jpeg";
import last from "./components/images/last box.jpeg";
import free from "./components/images/free ride.png";
import companion from "./components/images/companion (1).jpeg";
import fossil from "./components/images/fossil fuels.jpeg";
function App() {
  const getRideData = {
    title: "How LiftEase Works?",
    description:
      "Getting a lift with LiftEase is simple and hassle-free! First, just hop onto our website and click on 'Find Rides.' You'll instantly see a list of available rides heading in your desired direction. Browse through the options, choose the one that suits you best, and voila! You're all set to hop into your ride and reach your destination—all for free. Say goodbye to expensive cab fares and waiting times. With LiftEase, getting where you need to go has never been easier!",
    cardsData: [
      {
        cardTitle: "FIND",
        cardDescription:
          "Find a person who is going on the same route as you so that they can give you a lift.",
        CardImg: first,
      },
      {
        cardTitle: "HOP ON",
        cardDescription: "Hop onto your ride when they arrive",
        CardImg: mid,
      },
      {
        cardTitle: "ARRIVE",
        cardDescription: "Get to your desired destination safely for free",
        CardImg: last,
      },
    ],
  };
  const giveRideData = {
    title: "How to get Rewards?",

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
  const getRideScroll = [
    {
      heading: "Free and Hassle free Rides",
      description:
        "Enjoy cost-free and effortless transportation with our ride-sharing platform.",
      lappy_img: free,
    },
    {
      heading: "Discover compatible travel companions",
      description:
        "Find the perfect travel buddy for your journey with LiftEase.",
      lappy_img: companion,
    },
    {
      heading: "Be a traffic hero and environmental champion with us",
      description:
        "Join us in alleviating traffic congestion and reducing fossil fuel consumption, one ride at a time.",
      lappy_img: fossil,
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
                <MobileScroll scrollData={getRideScroll} />
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
                <MobileScroll scrollData={giveRideScroll} />
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
