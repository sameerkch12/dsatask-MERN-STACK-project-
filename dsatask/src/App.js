
import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './Screen/Home';
import Login from './Screen/Login';
import SignUp from './Screen/SignUp';
import UpcomingContest from './Screen/UpcomingContest';

function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/signup' element={<SignUp/>} />
            <Route exact path='/upcomingContest' element={<UpcomingContest/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
