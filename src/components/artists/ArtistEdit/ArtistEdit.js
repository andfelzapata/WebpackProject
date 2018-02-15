import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';

class ArtistEdit extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    const { match: { params } } = this.props
    this.props.findArtist(params.id);
  }

  componentWillReceiveProps({ artist }) {
    if (artist) {
      const {
        name, age, yearsActive, genre,
      } = artist;

      this.setState({
        name, age, yearsActive, genre,
      });
    }
  }

  componentWillUpdate(nextProps) {
    const { match: { params } } = this.props
    const { match: { params: nextParams } } = nextProps
    if (nextParams.id !== params.id) {
      this.props.findArtist(nextParams.id);
    }
  }

  componentWillUnmount() {
    this.props.clearError();
  }

  onSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    const { match: { params } } = this.props
    this.props.editArtist(params.id, this.state);
  }

  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <div className="input-field">
          <input
            value={this.state.name}
            onChange={e => this.setState({ name: e.target.value })}
            placeholder="Name"
          />
        </div>
        <div className="input-field">
          <input
            value={this.state.age}
            onChange={e => this.setState({ age: e.target.value })}
            placeholder="Age"
          />
        </div>
        <div className="input-field">
          <input
            value={this.state.yearsActive}
            onChange={e => this.setState({ yearsActive: e.target.value })}
            placeholder="Years Active"
          />
        </div>
        <div className="input-field">
          <input
            value={this.state.genre}
            onChange={e => this.setState({ genre: e.target.value })}
            placeholder="Genre"
          />
        </div>
        <div className="has-error">
          {this.props.errorMessage}
        </div>
        <button className="btn">Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  artist: state.artists.artist,
  errorMessage: state.errors,
});

export default connect(mapStateToProps, actions)(ArtistEdit);
