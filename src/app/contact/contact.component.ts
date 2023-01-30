import { Component, Directive } from '@angular/core';
import { ContactService } from '../Services/contact.service';
import {ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent {

    contacts;
    isSelected : boolean= false;
    email: String = "";
    name: String  = "";
    role: String = "";
    phone: String = "";
    successmsg : boolean = false;
    target :any;

    constructor(public contactservice: ContactService){
      this.contacts = contactservice.getDetails();
    }

   
    btnClicked(name:any, role:any, email:any, phone:any) : void {
      this.isSelected = true;
      this.name = name;
      this.role = role;
      this.phone = phone;
      this.email = email;
      this.successmsg = false;
      document.getElementById('target')?.scrollIntoView({behavior : "smooth"})
    }

    sendMessage() : void {
      this.isSelected = false;
      this.successmsg = true;
    }

    // my(target:HTMLElement) : void{
    //   target.scrollIntoView({behavior:'smooth'});
    // }
}
