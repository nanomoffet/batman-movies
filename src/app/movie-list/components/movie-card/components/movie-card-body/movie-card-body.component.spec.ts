import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardBodyComponent } from './movie-card-body.component';

describe('MovieCardBodyComponent', () => {
  let component: MovieCardBodyComponent;
  let fixture: ComponentFixture<MovieCardBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
