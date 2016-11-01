import React, { Component } from 'react';
//import Project from './project';

export default class Portfolio extends Component {
  projects = [
    { name: 'Open Source Champion',
       link: 'http://opensourcechamp.herokuapp.com/',
       image_url: 'http://i.imgur.com/BYEJ5Bf.png',
       technologies: 'Node.js, Express.js, Mustache.js, jQuery, Materialize.css, PSQL',
       description: 'Battle your fellow programmers to see who has the best open source stats! (Because hackers need another way to one up each other',
       github: 'https://github.com/jaredmurphy/open-source-champion',
       categories: ['Full Stack', 'Node', 'PSQL']
    }, 
     { name: 'MTA STATUS',
       link: 'http://mtastat.us/',
       image_url: 'http://i.imgur.com/OttzTuQ.png',
       technologies: 'React.js, Webpack, Redux, Axios, Express.js',
       description: 'New front end for MTA STATUS in a separate Node app with React, Redux, and Webpack.',
       github: 'https://github.com/jaredmurphy/mta_client',
       categories: ['Front End', 'React', 'Redux']
    }
  ];

  renderProjects() {
   return this.projects.map(function(project) {
      return (
        <div>
          <img className="projectImage" src={project.image_url} alt="" key={project.name}/>
        </div>
      )
    });
  };

  render() {
    return (
      <div>
        <h2>Portfolio</h2>
        <hr></hr>
        { this.renderProjects() }
        
      </div>
    )
  }
}
