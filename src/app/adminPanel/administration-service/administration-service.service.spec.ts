import { TestBed } from '@angular/core/testing';

import { AdministrationServiceService } from './administration-service.service';
import { accountInstances } from '../../mock-account';

describe('AdministrationServiceService', () => {
  let service: AdministrationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdministrationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

    it('should return Accounts', () => {
    expect(service.getAccounts()).toBeTruthy();
  })

  it('should return by id', () => {
    expect(service.getAccountById('ACC001')).toBeTruthy()
  })

  it('should edit account balance', () => {
    service.editAccountBalancebyId('ACC001', 20);

    expect(accountInstances.filter((account) => account.id === 'ACC001')[0].balance).toBe(20)
  })

  it('should edit account activation state', () => {
    service.editAccountActivationbyId('ACC001', false);

    expect(accountInstances.filter((account) => account.id === 'ACC001')[0].isActive).toBe(false)
  })
});
