import { Component, inject, OnInit, signal, WritableSignal } from '@angular/core';
import { JustService } from '../../services/just-service';
import { AdministrationServiceService } from '../administration-service/administration-service.service';
import {FormsModule} from '@angular/forms';
import { debounceTime, Subject } from 'rxjs';
import { publishFacade } from '@angular/compiler';
import { Account } from '../../mock-account';

class Request {
  constructor(
    public rowName: string,
    public rowValue: number | boolean,
    public id: string
  ) {}
}

@Component({
  selector: 'app-admin-panel',
  imports: [FormsModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.css'
})
export class AdminPanel implements OnInit {
  accountManager = inject(AdministrationServiceService);
  AccountArr: WritableSignal<Account[]> = signal([]);
  
  subject = new Subject<Request>();
  
  ngOnInit(): void {
    this.subject.pipe(debounceTime(500)).subscribe((request) => {
      console.log("update");
      switch (request.rowName) {
        case 'balance':
        this.accountManager.editAccountBalancebyId(request.id, request.rowValue as number);
        break;
        case 'isActive':
        this.accountManager.editAccountActivationbyId(request.id, request.rowValue as boolean)
        break;
      }
    });
    
    this.accountManager.Accounts.subscribe((id) => {
      this.AccountArr.update(arr => {arr.push(id); return arr});
    });
  }
  
  handleEditBalance(id: string, balance: number) {
    this.subject.next({id: id, rowValue: balance, rowName: "balance"});
  }
  
  handleEditActivation(id: string, isActive: boolean) {
    this.subject.next({id: id, rowValue: isActive, rowName: "isActive"});
  }
}
