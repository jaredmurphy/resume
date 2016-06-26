import React, { Component } from 'react';

export default class ResumeExperience extends Component {
  render() {
    return (
      <div className="resume_experiences">
        <h2>Experience</h2>
        <div>
          <h3>General Assembly New York, NY - Current</h3>
          <hr></hr>
          <p>Instructor for 3 month Web Development Immersive Bootcamp. Principally Ruby on Rails, Node.js</p>
          <ul className="experience_description_list">
            <li>Created testing framework to automate grading of nightly assignments </li>
            <li>Developed automated Slack-based alert system to notify faculty and administration when students fall behind</li>
            <li>Taught lessons on: Agile, Ruby on Rails, Databases, Javascript, React, BDD, and Node.js</li>
          </ul>

          <h3>IDT Corporation Newark, NJ - May 2016-June 2016</h3>
          <hr></hr>
          <p>Software Enginerring Intern for QA team. Focus on testing and Agile projects</p>
          <ul className="experience_description_list">
            <li>Configured automated testing framework to test Android (Java) apps with Ruby code</li>
            <li>Worked with Agile team on React Native and Node.js projects </li>
            <li>Tested new features on existing apps and drank a lot of delicous coffee</li>
          </ul>
        </div>

      </div>
    );
  }
}
