import { Component } from '@angular/core';

@Component({
  selector: 'app-projectideas',
  templateUrl: './projectideas.component.html',
  styleUrls: ['./projectideas.component.css']
})
export class ProjectideasComponent {

  
 projects: {name: String}[] = [];

 myname : string = "";
  

  addProject(target : any) : void {
    this.projects.push( {
      name:target
    } )
    this.myname = '';
  }

  removeProject(index: number) : void{
    this.projects.splice(index,1);
  }

}
