import React, { Component } from 'react';
import { Bar } from "react-chartjs";

let data = {
        labels: ["Javascript", "Ruby on Rails", "Testing", "ReactJS", "Databases", "Learning"],
        datasets: [{
            label: 'Skill Level',
            data: [10, 8, 6, 5, 3, 12],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    }

//options={chartOptions}
export default class SkillChart extends Component {
  render() {
    return <Bar data={data}  width="600" height="250"/>
  }
}
