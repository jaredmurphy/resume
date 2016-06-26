import React, { Component } from 'react';

let phraseList = [
  "Web Developer",
  "Musician",
  "Philologist",
  "Hi i'm jared. I live on music and coffee. "
];

export default class Homepage extends Component {
  render() {
      return (
        <div className="homepage">
          <h1 className="title">Jared Murphy</h1>
          <h4 className="phrase">{ phrases() }</h4>
          <div className="square">
            <h4 className="web">Web</h4>
            <h4>Developer</h4>
          </div>
        </div>
      );
  }

}
