import React from 'react';
import routes from './Routes';
import BrowserRouter from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {routes(state)}
      </BrowserRouter>
    </div>
  );
}

export default App;
