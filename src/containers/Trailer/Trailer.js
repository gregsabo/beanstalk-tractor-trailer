import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

export default class Trailer extends Component {
  render() {
    return (
      <div>
        <Helmet title="Trailer"/>
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
