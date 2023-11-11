import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeviceDetectorService } from './services/device-detector.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  standalone: true,
  imports: [RouterModule, FontAwesomeModule],
  providers: [DeviceDetectorService],
  selector: 'bff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
