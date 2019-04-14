import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeiscuatroPage } from './seiscuatro.page';

describe('SeiscuatroPage', () => {
  let component: SeiscuatroPage;
  let fixture: ComponentFixture<SeiscuatroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeiscuatroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeiscuatroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
