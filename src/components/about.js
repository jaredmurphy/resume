import React, { Component } from 'react';
import Typist from 'react-typist';

const statements = [
  "Hi I'm Jared"
];


export default class About extends Component {
  state = {
    statementNumber: 0
  }




  render() {
    return (
      <div className="about">

        <img className="profile_image" src="http://i.imgur.com/HCvFiWd.jpg" />

        <Typist className="typed_text" startDelay={1000} cursor={{hideWhenDone: true}}>
          "i like toast"
        </Typist>
        <Typist className="typed_text" avgTypingSpeed={40} startDelay={2000} cursor={{hideWhenDone: true}}>
        "hi i'm jared"

        </Typist>
        <Typist className="typed_text" startDelay={8000} element={""} cursor={{hideWhenDone: true}}>
          I love to program in js and Ruby
        </Typist>
        <Typist className="typed_text" startDelay={11000} cursor={{hideWhenDone: true}}>
          And I like to have fun!
        </Typist>
      </div>
    )
  }
}
