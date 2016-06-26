import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Layout extends Component {
  render() {
    return (
      <div>
        <ul className="nav_bar">
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"resume"}>Resume</Link>
          </li>
        </ul>
      </div>
    )
  }
}
