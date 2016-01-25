import { Component } from 'react';
import { Link } from 'react-router';

export default class Tractor extends Component {
  render() {
    return (
      <div>
        It is a Tractor.
      </div>
      <Link to="/trailer">
        Or is it a Trailer?
      </Link>
    );
  }
}
