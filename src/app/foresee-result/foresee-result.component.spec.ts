import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeseeResultComponent } from './foresee-result.component';

describe('ForeseeResultComponent', () => {
  let component: ForeseeResultComponent;
  let fixture: ComponentFixture<ForeseeResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForeseeResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeseeResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
