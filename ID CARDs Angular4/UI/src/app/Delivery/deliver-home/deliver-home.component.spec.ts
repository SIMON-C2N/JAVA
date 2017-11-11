import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverHomeComponent } from './deliver-home.component';

describe('DeliverHomeComponent', () => {
  let component: DeliverHomeComponent;
  let fixture: ComponentFixture<DeliverHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
