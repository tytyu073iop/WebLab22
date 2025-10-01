import { Injectable } from '@angular/core';
import { Account, accountInstances } from '../mock-account';

@Injectable({
  providedIn: 'root'
})
export class JustService {

  getListOfAccountsIds(): string[] {
    const value: string[] = accountInstances.map((account) => account.id);
    return value;
  }

  getAccountById(id: String): Account {
    return accountInstances.filter((account) => account.id === id)[0];
  }

}