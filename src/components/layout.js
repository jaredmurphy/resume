import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Layout extends Component {
  render() {
    return (
      <div>

        <div className="nav_bar fourteen columns">
          <ul className="nav_links">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"resume"}>Resume</Link>
            </li>
            <li>
              <Link to={"about"}>About</Link>
            </li>
            <li>
              <Link to={"portfolio"}>Portfolio</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
