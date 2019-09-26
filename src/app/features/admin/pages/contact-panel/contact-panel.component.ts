import { Component, OnInit } from '@angular/core';
import { ContactAdminService } from '../../services/contact-admin.service';
import { Contact } from 'src/app/shared/models/contact.model';
import { Messages } from 'src/app/shared/models/messages.model';

@Component({
  selector: 'app-contact-panel',
  templateUrl: './contact-panel.component.html',
  styleUrls: ['./contact-panel.component.scss']
})
export class ContactPanelComponent implements OnInit {
  contacts: Messages[];
  answered: Messages[];
  constructor(private contactService: ContactAdminService) {}

  ngOnInit() {
    this.contactService.getContacts().subscribe((response: Messages[]) => {
      console.log(response);
      this.contacts = response;
    });
    this.contactService.getAnswered().subscribe((response: Messages[]) => {
      console.log(response);
      this.answered = response;
    });
  }

  insertAnswer(id: number) {
    console.log(id, 'message id');
    this.contactService.contactAnswer(id).subscribe((response: number) => {
      console.log(response);
      this.contactService.getContacts().subscribe((response: Messages[]) => {
        console.log(response);
        this.contacts = response;
      });
      this.contactService.getAnswered().subscribe((response: Messages[]) => {
        console.log(response);
        this.answered = response;
      });
    });
  }

  deleteAnswer(id: number) {
    this.contactService.deleteContact(id).subscribe((response: number) => {
      console.log(response);
      this.contactService.getContacts().subscribe((response: Messages[]) => {
        console.log(response), (this.contacts = response);
      });
      this.contactService.getAnswered().subscribe((response: Messages[]) => {
        console.log(response), (this.answered = response);
      });
    });
  }
}
