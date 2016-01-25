import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import Helmet from 'react-helmet';

export default class Tractor extends Component {
  render() {
    return (
      <div>
        <Helmet title="Tractor"/>
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
