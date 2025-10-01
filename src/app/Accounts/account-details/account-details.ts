import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JustService } from '../../services/just-service';
import { Account } from '../../mock-account';

@Component({
  selector: 'app-account-details',
  imports: [],
  templateUrl: './account-details.html',
  styleUrl: './account-details.css'
})
export class AccountDetails implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  currentAccount = signal<Account | null>(null);
  accountManager = inject(JustService);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.currentAccount.set(this.accountManager.getAccountById(params['id']));
    });
  }
}
