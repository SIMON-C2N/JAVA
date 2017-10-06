import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveddetailsComponent } from './saveddetails.component';

describe('SaveddetailsComponent', () => {
  let component: SaveddetailsComponent;
  let fixture: ComponentFixture<SaveddetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveddetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveddetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
