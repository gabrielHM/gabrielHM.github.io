import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'resume-container',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent {
  person = { 
    name: 'Gabriel Huertas Marrero',
    email: 'contact@gabrielhm.me',
    description: 'Computer Science and Engineering undergrad student at the University of Puerto Rico, Mayaguez campus. Loves to design and code.' };
  skills = [
    { name: 'Java', level: 'Proficient' },
    { name: 'Python', level: 'Proficient' },
    { name: 'Node.js', level: 'Proficient' },
    { name: 'Angular', level: 'Proficient' },
    { name: '.NET', level: 'Proficient' },
    { name: 'ELK Stack', level: 'Knowledge On' },
    { name: 'HTML, CSS, Javascript', level: 'Proficient' }
  ];

  general = [
    { name: 'Spanish / English', level: 'Fully Bilingual' },
    { name: 'Full Stack', level: 'Proficient' },
    { name: 'Organized', level: 'Proficient' },
    { name: 'Responsible', level: 'Proficient' }];

  others = [
    { name: 'Office 365', level: 'Proficient' },
    { name: 'AWS', level: 'Proficient' },
    { name: 'Photoshop', level: 'Proficient' }];

    objective = "Obtain an Internship or COOP where I can acquire knowledge and experience in the area of software development, contributing my interdisciplinary strength of applying programming knowledge to multiple fields of science and engineering, while using my strong interpersonal skills for growing a healthy working environment."

    experiences = [
      {title: "Network System Intern", place: "Verizon, Basking Ridge NJ", time: "Jun 2018 – Aug 2018", description: ["Implemented existing routines of current and legacy systems that include data and network management into a Robotic Process Automation pipeline using Automation Anywhere software.","Added use cases to the existing Digital Network Assistant by training a chatbot, which Verizon employees can use through Jabber, using Google’s Dialogflow."]},
    {title: "Network System Intern", place: "Verizon, Irving TX", time: "Jun 2017 – Aug 2017", description: ["Design and developed a generic framework that would allow analysis on both Verizon physical and virtual domain.","Performed data analytics on the Dynamic Network Manager enterprise application to take advantage of Software Defined Networking."]},
    {title: "Institutional Research and Planning Office", place: "University of Puerto Rico, Mayaguez", time: "Jan 2015 – Present", description: ["Organize and analyze data for statistic use. Visually present data statistics.", "Web application developer using .NET, Share Point, and SQL Server.", "Business intelligence and data mining."]},
    {title: "Committee of Public Transport, “RUMBus”", place: "University of Puerto Rico, Mayaguez", time: "Jan 2015 – Dec 2016", description: ["Took the initiative and proposed the project to the Dean at the University of Puerto Rico Mayaguez campus.", "Leading developer of an application that tracks trolleys in real time around Mayaguez campus to improve public transport services and its usage among the community."]},
    {title: "Undergraduate Research, “Biomedical Sensing Device for On-Field Testing”", place: "University of Puerto Rico, Mayaguez", time: "Aug 2013 – May 2015", description: ["Developing the communication from a smartphone to a series of sensors through a microcontroller in order to transfer and process testing images.", "Developer of the smartphone app that does the testing and image processing."]},
    {title: "Undergraduate Research, “Verizon MoCA Network”", place: "University of Puerto Rico, Mayaguez", time: "Aug 2011 – May 2012", description: ["To better understand the strengths and weaknesses behind MoCA Technology by testing devices and data support capability within its physical layer.","Successfully connected and tested the quality of the network’s signal when exposed to different physical damages as well as network stress."]},
    {title: "Undergraduate Research, “iWiNC Laboratory”", place: "University of Puerto Rico, Mayaguez", time: "Aug 2010 – Aug 2012", description: ["Programmed a Lego-Mind Storm robot that solves the Rubik’s Cube Algorithm.","Began to Implement an Open Base Transceiver Station.", "2011 TAPIA Conference at California: Poster Presenter", "2011 CAHSI Conference at Puerto Rico: Poster Presenter"]}];


  }
