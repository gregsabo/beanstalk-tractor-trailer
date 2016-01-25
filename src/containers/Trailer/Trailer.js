import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export default class Trailer extends Component {
  render() {
    return (
      <div>
        <p>
          It is a Trailer.
        </p>
        <Link to="/tractor">
          Or is it a Tractor?
        </Link>
      </div>
    );
  }
}
