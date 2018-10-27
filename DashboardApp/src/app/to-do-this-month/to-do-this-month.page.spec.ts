import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoThisMonthPage } from './to-do-this-month.page';

describe('ToDoThisMonthPage', () => {
  let component: ToDoThisMonthPage;
  let fixture: ComponentFixture<ToDoThisMonthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoThisMonthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoThisMonthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
