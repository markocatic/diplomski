import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../models/contact.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  contact: Contact;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContactInfo().subscribe((response: Contact) => {
      this.contact = response;
      console.log(response);
    });
  }
}
