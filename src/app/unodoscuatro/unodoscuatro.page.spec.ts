import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnodoscuatroPage } from './unodoscuatro.page';

describe('UnodoscuatroPage', () => {
  let component: UnodoscuatroPage;
  let fixture: ComponentFixture<UnodoscuatroPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnodoscuatroPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnodoscuatroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
