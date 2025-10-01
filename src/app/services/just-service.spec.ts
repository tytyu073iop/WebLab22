import { TestBed } from '@angular/core/testing';

import { JustService } from './just-service';

describe('JustService', () => {
  let service: JustService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JustService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return array of strings', () => {
    expect(service.getListOfAccountsIds()).toBeTruthy();
  })

  it('should return by id', () => {
    expect(service.getAccountById('ACC001')).toBeTruthy()
  })


});
