import { Skill } from "./skill.model";

export class Developer {
  public firstName: string; 
  public lastName: string; 
    public age: number; 
    public sexe: string; 
    public bio: string;
    public skills : Skill[]

  
  constructor (
    firstName: string,
    lastName : string, 
    age : number ,
    sexe: string ,
    bio : string ,
    skills : Skill[],
    

  ) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.sexe = sexe
    this.bio = bio
    this.skills= skills
  
  
     }
  
}