import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountcompComponent } from './accountcomp.component';

describe('AccountcompComponent', () => {
  let component: AccountcompComponent;
  let fixture: ComponentFixture<AccountcompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccountcompComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccountcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
