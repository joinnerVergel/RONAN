import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonNotPaymentComponent } from './reason-not-payment.component';

describe('ReasonNotPaymentComponent', () => {
  let component: ReasonNotPaymentComponent;
  let fixture: ComponentFixture<ReasonNotPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReasonNotPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReasonNotPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
