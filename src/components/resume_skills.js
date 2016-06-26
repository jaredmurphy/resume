import React, { Component } from 'react';
import SkillChart from './skill_chart';
//const SkillChart = require("react-chartjs").Bar;


export default class ResumeSkills extends Component {
  render() {
    return (
      <div>
        <h3>Tech Proficiencies</h3>
        <hr></hr>
        < SkillChart />

      </div>
    );
  }
}
