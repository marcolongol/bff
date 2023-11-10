import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeviceDetectorService } from './services/device-detector.service';

@Component({
  standalone: true,
  imports: [RouterModule],
  providers: [DeviceDetectorService],
  selector: 'bff-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {}
