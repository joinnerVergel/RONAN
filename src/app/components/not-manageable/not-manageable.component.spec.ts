import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotManageableComponent } from './not-manageable.component';

describe('NotManageableComponent', () => {
  let component: NotManageableComponent;
  let fixture: ComponentFixture<NotManageableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotManageableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotManageableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
