import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'bff-desktop',
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.css'],
})
export class DesktopComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    console.log('DesktopComponent');
  }
}
