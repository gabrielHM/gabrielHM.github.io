import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'portfolio-container',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  projects = [
    {name: "OPIMI Project Management App", link: "http://gabrielhm.me/study-spot/", pic: "", description: "OPIMI by its spanish initials is the Office of Planning, Research, and Institutional Improvement at my university. This app helps organize all the projects that the university, as an institution, does. It generates reports based on project expending amoungs other things."},
    {name: "StudySpot", link: "http://gabrielhm.me/study-spot/", pic: "", description: "Introduction to Software Engineering class project."},
    {name: "GotSchool", link: "https://github.com/gabrielHM/got-school", pic: "", description: "Education Got Hacked Hackathon project."},
    {name: "Node.js & Angular Workshop", link: "https://github.com/gabrielHM/todo-workshop", pic: "", description: "Node.js and Angular.js workshop."}
  ];

}
