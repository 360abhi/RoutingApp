import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-projectideas',
  templateUrl: './projectideas.component.html',
  styleUrls: ['./projectideas.component.css']
})
export class ProjectideasComponent {

  
 projects: {name: String;}[] = [];

 myname : string = "";
  

  addProject(target : any) : void {
    this.projects.push( {
      name:target
    } )
    this.myname = '';
  }

}
