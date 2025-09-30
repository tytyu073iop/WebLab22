import { Routes } from '@angular/router';
import { AccountCenter } from './Accounts/account-center/account-center';
import { AccountList } from './Accounts/account-list/account-list';
import { AccountDetails } from './Accounts/account-details/account-details';

export const routes: Routes = [{path: '', component: AccountCenter}, {path: 'list', component: AccountList}, {path: 'details/:id', component: AccountDetails}];
