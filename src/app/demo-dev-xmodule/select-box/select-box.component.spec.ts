import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SelectBoxComponent } from './select-box.component';
import { DemoDataService } from '../demo-data.service';
import { DxSelectBoxModule } from 'devextreme-angular';

describe('SelectBoxComponent', () => {
  let component: SelectBoxComponent;
  let fixture: ComponentFixture<SelectBoxComponent>;
  let dataService : DemoDataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectBoxComponent ],
      providers:[
        DemoDataService
      ],
      imports:[
        DxSelectBoxModule,
        HttpClientTestingModule,
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onValueChanged method', () => {
    const mock = jest.spyOn(component,'onValueChanged')
    component.onValueChanged(event);
    expect(mock).toBeCalled();
  });
});
