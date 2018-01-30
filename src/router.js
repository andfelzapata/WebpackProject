import React from 'react';
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom';
import Home from 'components/Home';
import Header from 'components/Header';

const Routes = () => {
  return (
    <Router>
      <div>
        <Header />
        <Route path="/" component={Home} />
      </div>
    </Router>
  );
};

export default Routes;
