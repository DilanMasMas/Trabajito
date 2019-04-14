import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadodosPage } from './resultadodos.page';

describe('ResultadodosPage', () => {
  let component: ResultadodosPage;
  let fixture: ComponentFixture<ResultadodosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadodosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadodosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
