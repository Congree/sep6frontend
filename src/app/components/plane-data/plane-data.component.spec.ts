import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneDataComponent } from './plane-data.component';

describe('PlaneDataComponent', () => {
  let component: PlaneDataComponent;
  let fixture: ComponentFixture<PlaneDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaneDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaneDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
