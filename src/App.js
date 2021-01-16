import { useState } from 'react';
import './App.css';

import Home from './Home'
import Welcome from './Welcome'
function App() {
  const [user, updateUser] = useState('Joshua')
  return (
    <>
      {user && <Welcome user={user} />}
      <Home user={user} />
    </>
  );
}

export default App;
