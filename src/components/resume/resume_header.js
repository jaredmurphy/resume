import React, { Component } from 'react';

export default class ResumeHeader extends Component {
  render() {
    return (
      <div className="resume_header">
        <h1>Jared Murphy</h1>
        <table className="resume_contact">
          <tbody>
            <tr>
              <td>Harlem</td>
              <td className="td_right">T: 904-566-8701</td>
            </tr>
            <tr>
              <td>New York, NY</td>
              <td className="td_right">jaredcmurphy@gmail.com</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
