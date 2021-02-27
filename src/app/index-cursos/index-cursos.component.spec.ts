import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCursosComponent } from './index-cursos.component';

describe('IndexCursosComponent', () => {
  let component: IndexCursosComponent;
  let fixture: ComponentFixture<IndexCursosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexCursosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
