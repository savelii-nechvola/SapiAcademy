import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturersModalWindowComponent } from './lecturers-modal-window.component';

describe('LecturersModalWindowComponent', () => {
  let component: LecturersModalWindowComponent;
  let fixture: ComponentFixture<LecturersModalWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LecturersModalWindowComponent]
    });
    fixture = TestBed.createComponent(LecturersModalWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
