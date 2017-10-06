import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdcardselectionComponent } from './idcardselection.component';

describe('IdcardselectionComponent', () => {
  let component: IdcardselectionComponent;
  let fixture: ComponentFixture<IdcardselectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdcardselectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdcardselectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
