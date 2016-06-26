import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1> Jared Murphy </h1>
        <h4> Web Developer </h4>

        <h3 className="about_button">About</h3>
      </div>
    )
  }
}
