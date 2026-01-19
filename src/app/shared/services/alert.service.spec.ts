import { TestBed } from '@angular/core/testing';

import { AlertService } from './alert.service';
import {ToastNoAnimationModule} from "ngx-toastr";

describe('AlertService', () => {
  let service: AlertService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ToastNoAnimationModule.forRoot({
          timeOut: 1000,
          positionClass: 'toast-top-right',
          preventDuplicates: true,
        })
      ],
      providers: [AlertService]
    });
    service = TestBed.inject(AlertService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
