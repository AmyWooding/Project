import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProgressPage } from './my-progress.page';

describe('MyProgressPage', () => {
  let component: MyProgressPage;
  let fixture: ComponentFixture<MyProgressPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyProgressPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyProgressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
