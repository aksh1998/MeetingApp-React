import { useState } from 'react';
import { Router } from '@reach/router'
import './App.css';

import Home from './Components/Home'
import Welcome from './Components/Welcome'
import Navigation from './Components/Navigation'
import Register from './Components/Register'
import Login from './Components/Login'
import Meetings from './Components/Meetings'
function App() {
  const [user, updateUser] = useState('Joshua')
  return (
    <>
      <Navigation user={user} />
      {user && <Welcome user={user} />}
      <Router>
        <Home path="/" user={user} />
        <Login path="/login" />
        <Meetings path="/meetings" />
        <Register path="/register" />
      </Router>
    </>
  );
}

export default App;
