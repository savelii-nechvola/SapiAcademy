import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToStartComponent } from './to-start.component';

describe('ToStartComponent', () => {
  let component: ToStartComponent;
  let fixture: ComponentFixture<ToStartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToStartComponent]
    });
    fixture = TestBed.createComponent(ToStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
