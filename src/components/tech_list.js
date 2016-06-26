import React, { Component } from 'react';

export default class TechList extends Component {
  render() {
    return (
      <div>
        <p></p>

        <h1> Full List </h1>
        <div className="seven columns tech_list">
          <h5>Production Technologies</h5>
          <hr></hr>
            <ul>
              <li>Ruby on Rails</li>
              <li>Node.js</li>
              <li>Cucumber</li>
              <li>Linux</li>
              <li>Jenkins</li>
              <li>AWS</li>
              <li>PHP</li>
              <li>MongoDB</li>
            </ul>
        </div>

        <div className="five columns tech_list">
          <h5>Taught</h5>
          <hr></hr>
            <ul>
              <li>PostgreSQL</li>
              <li>Ruby</li>
              <li>RSpec</li>
              <li>Javascript</li>
              <li>Node.js</li>
              <li>ReactJS</li>
              <li>Socket.io</li>
              <li>jQuery</li>
            </ul>
        </div>

        <br></br>

        <div className="four columns tech_list">
          <h5>Dev Ops</h5>
          <hr></hr>
            <ul>
              <li>Linux</li>
              <li>Git</li>
              <li>Bash</li>
              <li>Jenkins</li>
              <li>AWS</li>
              <li>Heroku</li>
            </ul>
        </div>

        <div className="four columns tech_list">
          <h5>Some Knowledge</h5>
          <hr></hr>
            <ul>
              <li>GraphQL</li>
              <li>Go</li>
              <li>Python</li>
              <li>AngularJS</li>
              <li>Meteor</li>
              <li>Haskell</li>
            </ul>
        </div>

        <div className="four columns tech_list">
          <h5>Soft Skills</h5>
          <hr></hr>
            <ul>
              <li>Teaching</li>
              <li>Problem Solving</li>
              <li>Public Speaking</li>
              <li>Leadership</li>
              <li>Experimentation</li>
              <li>Self-Learning</li>
            </ul>
        </div>

      </div>
    );
  }
}
