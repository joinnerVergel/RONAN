import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementAcceptedComponent } from './agreement-accepted.component';

describe('AgreementAcceptedComponent', () => {
  let component: AgreementAcceptedComponent;
  let fixture: ComponentFixture<AgreementAcceptedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementAcceptedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementAcceptedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
