import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  private $path = 'http://localhost:8000/api';
  items;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get(`${this.$path}/info`).subscribe(
      response => {
        console.log(response), (this.items = response);
      },
      error => {}
    );
  }
}
