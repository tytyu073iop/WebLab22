import { Component } from '@angular/core';
import { AccountList } from "../account-list/account-list";

@Component({
  selector: 'app-account-center',
  imports: [AccountList],
  templateUrl: './account-center.html',
  styleUrl: './account-center.css'
})
export class AccountCenter {

}
