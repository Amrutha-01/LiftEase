import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
// import LandingPage from './components/LandingPage/LandingPage';
import MainPage from "./components/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import GetRide from 
"./components/GetRide/GetRidePage/GetRide";
import GiveRide from "./components/GiveRide/GiveRide";
import LEWorkGet from "./components/LEWorkGet/LEWorkGet";

function App() {
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
                <LEWorkGet/>
              </div>
            }
          />
          <Route
            path="/giveRide"
            element={
              <div>
                <Navbar />
                <GiveRide />
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
