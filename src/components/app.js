import React, { Component } from 'react';
import Resume from './resume/resume';
import Layout from './layout';

export default class App extends Component {
  render() {
    return (
      <div>
        < Layout />
        <br />
        { this.props.children }
      </div>
    );
  }
}
