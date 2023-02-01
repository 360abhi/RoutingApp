import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectideas',
  templateUrl: './projectideas.component.html',
  styleUrls: ['./projectideas.component.css'],
})
export class ProjectideasComponent {

  constructor(private router: Router){}

  projects: { name: String }[] = [];

  myname: string = '';

  addProject(target: any): void {
    this.projects.push({
      name: target,
    });
    this.myname = '';

    if (this.projects.length > 3) {
      this.router.navigate(['/services'])
    }
  }

  removeProject(index: number): void {
    this.projects.splice(index, 1);
  }
}
