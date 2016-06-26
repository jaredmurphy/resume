import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1> Jared Murphy </h1>
        <h4> Web Developer </h4>

        <Link to={"about"} className="about_button">About</Link>
      </div>
    )
  }
}
