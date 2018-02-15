import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/artists/Loading';

const LoadableComponent = Loadable({
  loader: () => import('./ArtistDetail'),
  loading: Loading
})

export default class LoadableArtistDetail extends Component {
  render() {
    const { props } = this;
    return <LoadableComponent {...props}/>
  }
}