import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountDetails } from './account-details';
import { provideRouter } from '@angular/router';

describe('AccountDetails', () => {
  let component: AccountDetails;
  let fixture: ComponentFixture<AccountDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountDetails],
      providers: [provideRouter([{path: 'details/AA001', component: AccountDetails}])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
