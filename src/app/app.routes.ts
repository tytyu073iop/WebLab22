import { Routes } from '@angular/router';
import { AccountCenter } from './Accounts/account-center/account-center';
import { AccountList } from './Accounts/account-list/account-list';
import { AccountDetails } from './Accounts/account-details/account-details';
import { AdminPanel } from './adminPanel/admin-panel/admin-panel';

export const routes: Routes = [
    {path: '', component: AccountCenter, children: 
        [{path: '', component: AccountList, children: [{path: 'details/:id', component: AccountDetails}]}, 
        {path: 'admin', component: AdminPanel}]
    }, 
    ];
