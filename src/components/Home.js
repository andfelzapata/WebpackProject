import React from 'react';
import { Route } from 'react-router-dom';
import ArtistMain from 'components/artists/ArtistMain';
import ArtistDetail from 'components/artists/ArtistDetail';
import ArtistCreate from 'components/artists/ArtistCreate';
import ArtistEdit from 'components/artists/ArtistEdit';

const Home = () => (
  <div className="container">
    <Route path="/" component={ArtistMain} />
    <Route path="artists/new" component={ArtistCreate} />
    <Route path="artists/:id" component={ArtistDetail} />
    <Route path="artists/:id/edit" component={ArtistEdit} />
  </div>
);

export default Home;
