import React from 'react';
import {
  Route,
  Switch,
  HashRouter as Router,
} from 'react-router-dom';
import Header from 'components/Header';
import ArtistMain from './components/artists/ArtistMain';
import ArtistDetail from './components/artists/ArtistDetail';
import ArtistCreate from './components/artists/ArtistCreate';
import ArtistEdit from './components/artists/ArtistEdit';

const Routes = () => (
  <Router>
    <div>
      <Header />
      <div className="container">
        <Route exact path="/" component={ArtistMain} />
        <Route path="/artists/new" component={ArtistCreate} />
        <Route path="/artists/:id" component={ArtistDetail} />
        <Route path="/artists/:id/edit" component={ArtistEdit} />
      </div>
    </div>
  </Router>
);

export default Routes;
