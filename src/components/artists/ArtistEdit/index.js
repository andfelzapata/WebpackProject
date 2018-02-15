import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/artists/Loading';

const LoadableComponent = Loadable({
  loader: () => import('./ArtistEdit'),
  loading: Loading
})

export default class LoadableArtistEdit extends Component {

  render() {
    const { props } = this;
    return <LoadableComponent {...props}/>
  }
}