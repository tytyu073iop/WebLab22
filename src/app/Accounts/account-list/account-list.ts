import { Component, inject, OnInit, signal } from '@angular/core';
import { Account, JustService } from '../../services/just-service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-list',
  imports: [RouterLink],
  templateUrl: './account-list.html',
  styleUrl: './account-list.css'
})
export class AccountList {
  accountManager = inject(JustService);
  
}
