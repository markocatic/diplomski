import { Component, OnInit } from '@angular/core';
import { ContactAdminService } from '../../services/contact-admin.service';
import { Contact } from 'src/app/shared/models/contact.model';

@Component({
  selector: 'app-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.scss']
})
export class ContactPanelComponent implements OnInit {
  contacts: Contact[];
  answered: Contact[];
  constructor(private contactService: ContactAdminService) {}

  ngOnInit() {
    this.contactService.getContacts().subscribe((response: Contact[]) => {
      console.log(response), (this.contacts = response);
    });
    this.contactService.getAnswered().subscribe((response: Contact[]) => {
      console.log(response), (this.answered = response);
    });
  }

  insertAnswer(id: number) {
    this.contactService.contactAnswer(id).subscribe((response: number) => {
      console.log(response);
      this.contactService.getContacts().subscribe((response: Contact[]) => {
        console.log(response), (this.contacts = response);
      });
      this.contactService.getAnswered().subscribe((response: Contact[]) => {
        console.log(response), (this.answered = response);
      });
    });
  }

  deleteAnswer(id: number) {
    this.contactService.deleteContact(id).subscribe((response: number) => {
      console.log(response);
      this.contactService.getContacts().subscribe((response: Contact[]) => {
        console.log(response), (this.contacts = response);
      });
      this.contactService.getAnswered().subscribe((response: Contact[]) => {
        console.log(response), (this.answered = response);
      });
    });
  }
}
