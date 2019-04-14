import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NueveseisPage } from './nueveseis.page';

describe('NueveseisPage', () => {
  let component: NueveseisPage;
  let fixture: ComponentFixture<NueveseisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NueveseisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NueveseisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
