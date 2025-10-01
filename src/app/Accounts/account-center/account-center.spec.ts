import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCenter } from './account-center';
import { RouterTestingModule } from '@angular/router/testing';
import { provideRouter } from '@angular/router';

describe('AccountCenter', () => {
  let component: AccountCenter;
  let fixture: ComponentFixture<AccountCenter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccountCenter],
      providers: [provideRouter([{path: '', component: AccountCenter}])]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountCenter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
