import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'bff-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.css'],
})
export class MobileComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('MobileComponent');
  }
}
