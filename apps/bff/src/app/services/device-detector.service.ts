import { Injectable, Optional, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Request } from 'express';

@Injectable({
  providedIn: 'root',
})
export class DeviceDetectorService {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Optional() @Inject('REQUEST') private request: Request
  ) {}

  private get userAgent(): string {
    if (isPlatformBrowser(this.platformId)) {
      return navigator.userAgent;
    } else {
      return this.request.headers['user-agent'] || '';
    }
  }

  public isMobile(): boolean {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      this.userAgent
    );
  }
}
