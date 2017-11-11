import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackdelivarablesComponent } from './trackdelivarables.component';

describe('TrackdelivarablesComponent', () => {
  let component: TrackdelivarablesComponent;
  let fixture: ComponentFixture<TrackdelivarablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackdelivarablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackdelivarablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
