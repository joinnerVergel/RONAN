import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithOutDebtComponent } from './with-out-debt.component';

describe('WithOutDebtComponent', () => {
  let component: WithOutDebtComponent;
  let fixture: ComponentFixture<WithOutDebtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithOutDebtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithOutDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
