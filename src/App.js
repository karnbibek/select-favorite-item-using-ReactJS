import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const App = ({ children }) => {
  return (
    <div className="App">
      <div className="navbar">
        <Link to="/" className="navitem">Planets</Link>
        <Link to="/favorites" className="navitem">Favorite</Link>
      </div>
      {children}
      {/* <div>App</div> */}
    </div>
  );
}

export default App;
