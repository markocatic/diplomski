import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-smartphones',
  templateUrl: './smartphones.component.html',
  styleUrls: ['./smartphones.component.scss']
})
export class SmartphonesComponent implements OnInit {

  array: number[] = new Array<number>(9).fill(1);

  constructor() { }

  ngOnInit() {
  }

}
