import React, { useEffect } from 'react';
import { connect } from 'react-redux'
import Routes from '../Routes';
import { Router } from 'react-router-dom';
import { receiveAll } from '../actions/shared';
import history from '../history'
import '../css/App.css';

const App = (props) => {

  const { dispatch } = props

  useEffect(() => dispatch(receiveAll()), [dispatch]);

    return(
    <div className="App">
      <Router history={history}>
        <Routes/>
      </Router>
    </div>);
};

export default connect()(App);
