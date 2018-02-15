import React, { Component } from 'react';

export default class Loading extends Component {
  render() {

    const {
      props
    } = this;

    if (props.error) {
      // When the loader has errored
      return <div>Error!</div>;
    } else if (props.timedOut) {
      // When the loader has taken longer than the timeout
      return <div>Taking a long time...</div>;
    } else if (props.pastDelay) {
      // When the loader has taken longer than the delay
      return <div>Loading...</div>;
    } else {
      // When the loader has just started
      return null;
    }
  }
}