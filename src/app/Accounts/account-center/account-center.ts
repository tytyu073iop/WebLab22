import { Component } from '@angular/core';
import { AccountList } from "../account-list/account-list";
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-account-center',
  imports: [AccountList, RouterLink],
  templateUrl: './account-center.html',
  styleUrl: './account-center.css'
})
export class AccountCenter {

}
