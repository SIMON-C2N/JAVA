import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdselectionComponent } from './idselection.component';

describe('IdselectionComponent', () => {
  let component: IdselectionComponent;
  let fixture: ComponentFixture<IdselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
