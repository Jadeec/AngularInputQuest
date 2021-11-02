import { Component, OnInit } from '@angular/core';
import { Developer } from '../shared/developer.model';
import { Skill } from '../shared/skill.model';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css'],
})
export class DeveloperComponent implements OnInit {
  firstDeveloper: Developer;

  constructor() {
    this.firstDeveloper = new Developer(
      'John',
      'Doe',
      30,
      'male',
      'the first developer',
      [
        new Skill('JAVA', 'a cup of coffee', 'https://www.java.com/'),
        new Skill('Angular', 'just an A', 'https://angular.io/'),
      ]
    );
  }

  ngOnInit(): void {}
}
