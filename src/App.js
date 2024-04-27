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
import img3 from "./components/images/location.svg";
import first from "./components/images/1st box.png";
import mid from "./components/images/middle box.jpeg";
import last from "./components/images/last box.jpeg";
import free from "./components/images/free ride.png";
import companion from "./components/images/companion (1).jpeg";
import fossil from "./components/images/fossil fuels.jpeg";
import reward from "./components/images/rewards.png";
import rides from "./components/images/RIDE.jpeg";
import travel from "./components/images/travelling.png";
import pick from "./components/images/picking up.png";

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
      "Getting rewards with LiftEase is easy and rewarding! Simply start by visiting our website and clicking on the 'Give Lifts' option. Enter your ride details, including your starting point, destination, and preferred route. Once you're on your way, you'll receive notifications if someone is in need of a lift along your route. Offer a safe and comfortable ride to your fellow travelers, drop them off at their destination, and earn rewards for your generosity. It's that simple! Join our community of drivers today and start making a positive impact while earning rewards with LiftEase.",
    cardsData: [
      {
        cardTitle: "FIND",
        cardDescription: "Find the person who selected you to give them a lift",
        CardImg: pick,
      },
      {
        cardTitle: "RIDE",
        cardDescription: "Give a safe and secure ride to their destination",
        CardImg: travel,
      },
      {
        cardTitle: "EARN",
        cardDescription: "Earn credit points for giving a safe lift",
        CardImg: reward,
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
      lappy_img: rides,
    },
    {
      heading: "Discover compatible travel companions",
      description:
        "Find the perfect travel buddy for your journey with LiftEase.",
      lappy_img: companion,
    },
    {
      heading: "Earn Credit Points to Use",
      description:
        "Earn Credit points with respect to the results and use them to redeem produts or discount coupons",
      lappy_img: reward,
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
