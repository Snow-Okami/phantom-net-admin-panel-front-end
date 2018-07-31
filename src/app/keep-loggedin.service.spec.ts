import { TestBed, inject } from '@angular/core/testing';

import { KeepLoggedinService } from './keep-loggedin.service';

describe('KeepLoggedinService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KeepLoggedinService]
    });
  });

  it('should be created', inject([KeepLoggedinService], (service: KeepLoggedinService) => {
    expect(service).toBeTruthy();
  }));
});
