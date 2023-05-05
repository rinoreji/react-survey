import { Component, OnInit } from '@angular/core';
import { Model } from "survey-core";
import surveyConfig from './survey-config';

const surveyJson = surveyConfig;

@Component({
  selector: 'app-root',
  template: `
  <survey [model]="surveyModel"></survey>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent  implements OnInit {
  title = 'My First Survey';
  surveyModel!: Model;
  ngOnInit() {
    const survey = new Model(surveyJson);
    this.surveyModel = survey;
  }
}
