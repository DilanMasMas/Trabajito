import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosietePage } from './resultadosiete.page';

describe('ResultadosietePage', () => {
  let component: ResultadosietePage;
  let fixture: ComponentFixture<ResultadosietePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosietePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosietePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
