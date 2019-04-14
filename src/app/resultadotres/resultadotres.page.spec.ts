import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadotresPage } from './resultadotres.page';

describe('ResultadotresPage', () => {
  let component: ResultadotresPage;
  let fixture: ComponentFixture<ResultadotresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadotresPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadotresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
