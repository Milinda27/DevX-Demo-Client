import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialFormComponent } from './material-form.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DemoDevXModule } from '../demo-dev-x.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MaterialFormComponent', () => {
  let component: MaterialFormComponent;
  let fixture: ComponentFixture<MaterialFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialFormComponent ],
      providers: [ 
        FormBuilder,
      ],
      imports: [
        ReactiveFormsModule,
        DemoDevXModule,
        BrowserAnimationsModule,

      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit method', () => {
    const value = {};
    const formSpy = jest.spyOn(component,'onFormSubmit')
    component.onFormSubmit(value);
    expect(formSpy).toBeCalled();
  });
});
