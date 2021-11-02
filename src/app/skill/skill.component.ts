import { Component, Input, OnInit } from '@angular/core';
import { Skill } from '../shared/skill.model';


@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  @Input() skill: Skill | undefined
 
 constructor () {
  
}

  ngOnInit(): void {
    
  }

}
