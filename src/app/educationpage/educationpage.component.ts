import { Component } from '@angular/core';

@Component({
  selector: 'app-educationpage',
  templateUrl: './educationpage.component.html',
  styleUrls: ['./educationpage.component.css']
})
export class EducationpageComponent {
  educationArray = [
    {
      degree: "BSCS",
      cgpa: 3.96,
      institute: "University Of Central Punjab",
      curryear: "2016 - 2020",
    },
    {
      degree: "FSC",
      cgpa: "91%",
      institute: "Punjab Group Of Colleges",
      curryear: "2014 - 2016",
    },
    {
      degree: "Matric",
      cgpa: "93%",
      institute: "Pakistan International Progressive High School",
      curryear: "2012 - 2014",
    },
  ];
  certificationsArray = [
    {
      certificate: "Microsoft AZ-204",
      source: "Microsoft",
      specialization: "Manage Microsoft Azure Architecture",
    },
    {
      certificate: "Foundations of Data Science",
      source: "Coursera, Google",
      specialization: "Google Advanced Data Analytics",
    },
    {
      certificate: "Get Started with Python",
      source: "Coursera, Google",
      specialization: "Google Advanced Data Analytics",
    },
    {
      certificate: "Go Beyond the Numbers: Translate Data into Insights",
      source: "Coursera, Google",
      specialization: "Google Advanced Data Analytics",
    },
    {
      certificate: "Supervised Machine Learning: Regression and Classification",
      source: "Coursera, Deeplearning.ai",
      specialization: "Machine Learning Specialization"
    }
  ];

}
