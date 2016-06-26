import React, { Component } from 'react';
import Resume from './resume/resume';
import Layout from './layout';

export default class App extends Component {
  render() {
    return (
      <div>
        < Layout />
        <br />
        <div className="content">
          { this.props.children }
        </div>

      </div>
    );
  }
}
