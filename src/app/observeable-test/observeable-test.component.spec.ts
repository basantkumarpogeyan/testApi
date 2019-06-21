import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ObserveableTestComponent } from './observeable-test.component';

describe('ObserveableTestComponent', () => {
  let component: ObserveableTestComponent;
  let fixture: ComponentFixture<ObserveableTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ObserveableTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ObserveableTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
