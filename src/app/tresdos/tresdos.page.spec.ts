import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TresdosPage } from './tresdos.page';

describe('TresdosPage', () => {
  let component: TresdosPage;
  let fixture: ComponentFixture<TresdosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TresdosPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TresdosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
