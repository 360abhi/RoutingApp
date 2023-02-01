import { Component } from '@angular/core';
import { MyServices } from '../Services/myservices.service';

@Component({
  selector: 'app-myservices',
  templateUrl: './myservices.component.html',
  styleUrls: ['./myservices.component.css'],
  providers : [MyServices]
})
export class MyservicesComponent {

  // ifClicked : boolean = false;
  services ;
  constructor(private _myservice : MyServices){

    this.services = this._myservice.getDetails();
  }


  // isClicked() : void {
  //   this.ifClicked = !this.ifClicked;
   
  // }

}
