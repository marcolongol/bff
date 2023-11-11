import { environment } from './../../../environments/environment';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';

@Component({
  selector: 'bff-desktop',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss'],
})
export class DesktopComponent implements OnInit {
  ngOnInit(): void {
    console.log(environment);
  }
}
