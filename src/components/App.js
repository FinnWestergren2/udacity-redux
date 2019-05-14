import React from 'react';
import { connect } from 'react-redux'
import routes from './Routes';
import { BrowserRouter } from 'react-router-dom';
import '../css/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {routes()}
      </BrowserRouter>
    </div>
  );
}

export default connect()(App);
