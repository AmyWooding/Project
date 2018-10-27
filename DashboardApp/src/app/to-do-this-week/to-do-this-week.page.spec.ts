import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoThisWeekPage } from './to-do-this-week.page';

describe('ToDoThisWeekPage', () => {
  let component: ToDoThisWeekPage;
  let fixture: ComponentFixture<ToDoThisWeekPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToDoThisWeekPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoThisWeekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
