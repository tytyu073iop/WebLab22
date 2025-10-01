import { Injectable } from '@angular/core';
import { Account, accountInstances } from '../../mock-account';
import { from, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministrationServiceService {
  Accounts = from(accountInstances);

  getAccountById(id: String): Account {
      return accountInstances.filter((account) => account.id === id)[0];
  }

  editAccountBalancebyId(id: string, balance: number) {
    let account = this.getAccountById(id);
    account.balance = balance;
  }

  editAccountActivationbyId(id: string, isActive: boolean) {
    let account = this.getAccountById(id);
    account.isActive = isActive;
  }
}
