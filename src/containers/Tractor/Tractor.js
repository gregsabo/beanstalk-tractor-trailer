import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

export default class Tractor extends Component {
  render() {
    return (
      <div>
        <p>
          It is a Tractor.
        </p>
        <Link to="/trailer">
          Or is it a Trailer?
        </Link>
      </div>
    );
  }
}
