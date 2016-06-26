import React, { Component } from 'react';
import ResumeHeader from './resume_header';
import ResumeExperience from './resume_experience';
import ResumeSkills from './resume_skills';
import Education from './education';

export default class Resume extends Component {
  render() {
    return (
      <div className="resume">
        < ResumeHeader />
        < ResumeExperience />
        < ResumeSkills />
        < Education />
      </div>

    );
  }
}
