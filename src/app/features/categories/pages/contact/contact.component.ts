import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ContactService } from 'src/app/shared/services/contact.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Contact } from 'src/app/shared/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  items: Contact;
  contactForm: FormGroup;

  constructor(private http: HttpClient, private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContactInfo().subscribe((response: Contact) => {
      this.items = response;
    });
    this.contactForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      number: new FormControl('', Validators.required),
      message: new FormControl('', Validators.required)
    });
  }

  onSubmit(event: FormGroup) {
    this.contactService.putContact(event.value).subscribe((response: Object) => console.log(response));
  }
}
