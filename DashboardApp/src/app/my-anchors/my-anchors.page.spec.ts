import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyAnchorsPage } from './my-anchors.page';

describe('MyAnchorsPage', () => {
  let component: MyAnchorsPage;
  let fixture: ComponentFixture<MyAnchorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyAnchorsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyAnchorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
