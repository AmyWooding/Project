import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyToDoListPage } from './daily-to-do-list.page';

describe('DailyToDoListPage', () => {
  let component: DailyToDoListPage;
  let fixture: ComponentFixture<DailyToDoListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyToDoListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyToDoListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
