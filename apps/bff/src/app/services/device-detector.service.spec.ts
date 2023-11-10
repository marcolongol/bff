/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { DeviceDetectorService } from './device-detector.service';

describe('Service: DeviceDetector', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeviceDetectorService],
    });
  });

  it('should ...', inject(
    [DeviceDetectorService],
    (service: DeviceDetectorService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('should return false if not mobile', inject(
    [DeviceDetectorService],
    (service: DeviceDetectorService) => {
      expect(service.isMobile()).toBeFalsy();
    }
  ));

  it('should return true if mobile', inject(
    [DeviceDetectorService],
    (service: DeviceDetectorService) => {
      const userAgent =
        'Mozilla/5.0 (Linux; Android 9; SM-G960U) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.125 Mobile Safari/537.36';
      Object.defineProperty(window.navigator, 'userAgent', {
        value: userAgent,
        configurable: true,
      });
      expect(service.isMobile()).toBeTruthy();
    }
  ));
});
