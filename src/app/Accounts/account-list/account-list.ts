import { Component, inject, OnInit, Signal, signal, WritableSignal } from '@angular/core';
import { JustService } from '../../services/just-service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-account-list',
  imports: [RouterLink, AsyncPipe],
  templateUrl: './account-list.html',
  styleUrl: './account-list.css'
})
export class AccountList implements OnInit {
  accountManager = inject(JustService);
  idArr: WritableSignal<string[]> = signal([]);

  ngOnInit(): void {
      this.accountManager.AccountsIds.subscribe((id) => {
        this.idArr.update(arr => {arr.push(id); return arr});
      })
  }
  
}
