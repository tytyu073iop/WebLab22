import { Component, inject } from '@angular/core';
import { JustService } from '../../services/just-service';
import { AdministrationServiceService } from '../administration-service/administration-service.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-admin-panel',
  imports: [FormsModule],
  templateUrl: './admin-panel.html',
  styleUrl: './admin-panel.css'
})
export class AdminPanel {
  accountManager = inject(AdministrationServiceService);


}
