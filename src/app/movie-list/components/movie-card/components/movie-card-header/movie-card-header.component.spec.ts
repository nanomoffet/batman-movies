import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardHeaderComponent } from './movie-card-header.component';

describe('MovieCardHeaderComponent', () => {
  let component: MovieCardHeaderComponent;
  let fixture: ComponentFixture<MovieCardHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
