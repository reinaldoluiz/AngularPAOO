import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCursoComponent } from './show-curso.component';

describe('ShowCursoComponent', () => {
  let component: ShowCursoComponent;
  let fixture: ComponentFixture<ShowCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
