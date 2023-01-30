import { Component } from '@angular/core';
import { ContactService } from '../Services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [ContactService]
})
export class ContactComponent {

    contacts;

    constructor(public contactservice: ContactService){
      this.contacts = contactservice.getDetails();
    }
}
