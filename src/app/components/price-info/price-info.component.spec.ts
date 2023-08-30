import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceInfoComponent } from './price-info.component';

describe('PriceInfoComponent', () => {
  let component: PriceInfoComponent;
  let fixture: ComponentFixture<PriceInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriceInfoComponent]
    });
    fixture = TestBed.createComponent(PriceInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
