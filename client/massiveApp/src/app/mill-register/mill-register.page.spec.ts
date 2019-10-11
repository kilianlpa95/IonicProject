import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MillRegisterPage } from './mill-register.page';

describe('MillRegisterPage', () => {
  let component: MillRegisterPage;
  let fixture: ComponentFixture<MillRegisterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillRegisterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MillRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
