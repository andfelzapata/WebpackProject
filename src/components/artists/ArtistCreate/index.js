import React, { Component } from 'react';
import Loadable from 'react-loadable';
import Loading from 'components/artists/Loading';

const LoadableComponent = Loadable({
  loader: () => import('./ArtistCreate'),
  loading: Loading
})

export default class LoadableArtistCreate extends Component {

  render() {
    const { props } = this;
    return <LoadableComponent {...props}/>
  }

}