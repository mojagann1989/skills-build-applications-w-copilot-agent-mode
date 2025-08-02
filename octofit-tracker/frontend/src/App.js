
import './App.css';

import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';
import logo from '../public/octofitapp-small.png';

function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand d-flex align-items-center" to="/">
              <img src={logo} alt="OctoFit Logo" className="App-logo" />
              OctoFit Tracker
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Workouts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="mt-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <div className="card">
                <div className="card-body">
                  <h1 className="card-title text-primary mb-4">Welcome to OctoFit Tracker</h1>
                  <p className="card-text">Track your activities, join teams, view the leaderboard, and more!</p>
                  <Link to="/activities" className="btn btn-primary m-2">View Activities</Link>
                  <Link to="/leaderboard" className="btn btn-success m-2">Leaderboard</Link>
                  <Link to="/teams" className="btn btn-info m-2">Teams</Link>
                  <Link to="/users" className="btn btn-warning m-2">Users</Link>
                  <Link to="/workouts" className="btn btn-secondary m-2">Workouts</Link>
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
