import { TestBed } from '@angular/core/testing';

import { ControlerService } from './controler.service';

describe('ControlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ControlerService = TestBed.get(ControlerService);
    expect(service).toBeTruthy();
  });
});
