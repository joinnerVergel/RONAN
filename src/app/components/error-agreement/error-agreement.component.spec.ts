import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorAgreementComponent } from './error-agreement.component';

describe('ErrorAgreementComponent', () => {
  let component: ErrorAgreementComponent;
  let fixture: ComponentFixture<ErrorAgreementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorAgreementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorAgreementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
