/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataCountService } from './DataCount.service';

describe('Service: DataCount', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataCountService]
    });
  });

  it('should ...', inject([DataCountService], (service: DataCountService) => {
    expect(service).toBeTruthy();
  }));
});
