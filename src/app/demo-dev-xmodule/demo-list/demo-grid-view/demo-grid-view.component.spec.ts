import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGridViewComponent } from './demo-grid-view.component';

describe('DemoGridViewComponent', () => {
  let component: DemoGridViewComponent;
  let fixture: ComponentFixture<DemoGridViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemoGridViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoGridViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
