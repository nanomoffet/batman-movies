import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieCardButtonComponent } from './movie-card-button.component';

describe('MovieCardButtonComponent', () => {
  let component: MovieCardButtonComponent;
  let fixture: ComponentFixture<MovieCardButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCardButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
