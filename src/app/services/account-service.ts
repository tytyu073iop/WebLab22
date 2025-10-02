import { Injectable } from '@angular/core';
import { Account, accountInstances } from '../mock-account';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  AccountsIds = new Observable<string>((observer) => {
    const values: string[] = accountInstances.map((account) => account.id);
    for (const value of values) {
      observer.next(value);
    }
    observer.complete();
  });

  getAccountById(id: String): Observable<Account> {
    return of(accountInstances.filter((account) => account.id === id)[0]);
  }

}