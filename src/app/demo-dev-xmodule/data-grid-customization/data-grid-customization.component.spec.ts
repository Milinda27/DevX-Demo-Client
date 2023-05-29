import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridCustomizationComponent } from './data-grid-customization.component';


describe('DataGridCustomizationComponent', () => {
  let component: DataGridCustomizationComponent;
  let fixture: ComponentFixture<DataGridCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGridCustomizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
