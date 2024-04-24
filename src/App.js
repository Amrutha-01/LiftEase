import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/LandingPage/LandingPage';
import MainPage from './components/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<LandingPage/>}/>
          <Route path="/mainPage" element={<MainPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
