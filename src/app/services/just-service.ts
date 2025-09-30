import { Injectable } from '@angular/core';

export class Account {
  constructor(
    public id: string,
    public balance: number = 0,
    public isActive: boolean = true
  ) {}
}

const accountInstances = [
  new Account("ACC001", 1500.75, true),
  new Account("ACC002", 2500.50),
  new Account("ACC003", 0, false),
  new Account("ACC004", -150.25, true),
  new Account("ACC005", 100000, true)
];

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