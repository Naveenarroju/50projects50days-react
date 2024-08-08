import './App.css';
import ProjectButtons from './Projects/ProjectButtons'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import ExpandingCards from './Projects/expanding_cards/ExpandingCards';
import ProgressBar from './Projects/progress_bar/ProgressBar';
import BlurEffect from './Projects/Blur-effect/BlurEffect';
import HiddingSearch from './Projects/hidding_search/HiddingSearch';
import RotatingNav from './Projects/rotating_nav/RotatingNav';

function App() {
  return (
    <Router>
    <div className="App">
      <header>
      <h1>
      50 days 50 CSS Projects in React
      </h1>
      </header>
     <Routes>
      <Route path='/' element={<ProjectButtons/>}></Route>
      <Route path='/expanding_cards' element={<ExpandingCards />}></Route>
      <Route path='/progress_bar' element={<ProgressBar />}></Route>
      <Route path='/Blur_Effect' element={<BlurEffect />}></Route>
      <Route path='/Hidding_search' element={<HiddingSearch />}></Route>
      <Route path='/rotating_nav' element={<RotatingNav />}></Route>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
