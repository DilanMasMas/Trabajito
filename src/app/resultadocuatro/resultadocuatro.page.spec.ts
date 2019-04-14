import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadocuatroPage } from './resultadocuatro.page';

describe('ResultadocuatroPage', () => {
  let component: ResultadocuatroPage;
  let fixture: ComponentFixture<ResultadocuatroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadocuatroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadocuatroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
