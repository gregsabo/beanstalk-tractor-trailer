import { Component } from 'react';
import { Link } from 'react-router';

export default class Trailer extends Component {
  render() {
    return (
      <div>
        It is a Trailer.
      </div>
      <Link to="/tractor">
        Or is it a Tractor?
      </Link>
    );
  }
}
