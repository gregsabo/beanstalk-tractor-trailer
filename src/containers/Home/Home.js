import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Helmet title="Home"/>
        <h1>Welcome to Redux-Decagon</h1>
        <p>A simple starting point for new apps.</p>
        <p>Start out with...</p>
        <p>
          <Link to="/tractor">Tractor</Link>
        </p>
        <p>
          <Link to="/trailer">Trailer</Link>
        </p>
      </div>
    );
  }
}
