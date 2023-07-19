import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Home from './Screen/Home/Home';
import Login from './Screen/Login/Login';
import SignUp from './Screen/SignUp/SignUp';
import UpcomingContest from './Screen/UpcomingContest';
import Registration from './Screen/Registration/Registration';

function App() {
  return (
    <Router>
        <div>
          <Routes>
            <Route exact path='/' element={<Registration/>} />
            <Route exact path='/home' element={<Home />} />
            <Route exact path='/login' element={<Login/>} />
            <Route exact path='/signup' element={<SignUp/>} />
            <Route exact path='/upcomingContest' element={<UpcomingContest/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
