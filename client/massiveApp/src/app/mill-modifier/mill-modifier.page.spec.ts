import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MillModifierPage } from './mill-modifier.page';

describe('MillModifierPage', () => {
  let component: MillModifierPage;
  let fixture: ComponentFixture<MillModifierPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillModifierPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MillModifierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
