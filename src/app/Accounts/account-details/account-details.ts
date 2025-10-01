import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JustService } from '../../services/just-service';
import { Account } from '../../mock-account';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';


@Component({
  selector: 'app-account-details',
  imports: [AsyncPipe],
  templateUrl: './account-details.html',
  styleUrl: './account-details.css'
})
export class AccountDetails implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  currentAccount? : Observable<Account> | null;
  accountManager = inject(JustService);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.currentAccount = this.accountManager.getAccountById(params['id']);
    });
  }
}
