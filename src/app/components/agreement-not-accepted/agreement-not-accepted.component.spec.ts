import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementNotAcceptedComponent } from './agreement-not-accepted.component';

describe('AgreementNotAcceptedComponent', () => {
  let component: AgreementNotAcceptedComponent;
  let fixture: ComponentFixture<AgreementNotAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementNotAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementNotAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
