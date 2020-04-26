import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportDataComponent } from './airport-data.component';

describe('AirportDataComponent', () => {
  let component: AirportDataComponent;
  let fixture: ComponentFixture<AirportDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirportDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
