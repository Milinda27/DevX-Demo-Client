import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoDetailViewComponent } from './demo-detail-view.component';

describe('DemoDetailViewComponent', () => {
  let component: DemoDetailViewComponent;
  let fixture: ComponentFixture<DemoDetailViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoDetailViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
