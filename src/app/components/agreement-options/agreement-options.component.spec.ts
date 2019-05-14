import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgreementOptionsComponent } from './agreement-options.component';

describe('AgreementOptionsComponent', () => {
  let component: AgreementOptionsComponent;
  let fixture: ComponentFixture<AgreementOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgreementOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgreementOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
