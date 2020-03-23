import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PillNavComponent } from './pill-nav.component';

describe('PillNavComponent', () => {
  let component: PillNavComponent;
  let fixture: ComponentFixture<PillNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PillNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PillNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
