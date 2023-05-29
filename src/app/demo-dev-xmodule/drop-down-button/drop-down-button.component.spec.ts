import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownButtonComponent } from './drop-down-button.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DemoDataService } from '../demo-data.service';
import { DxDropDownButtonModule } from 'devextreme-angular';

describe('DropDownButtonComponent', () => {
  let component: DropDownButtonComponent;
  let fixture: ComponentFixture<DropDownButtonComponent>;
  let event:unknown;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DropDownButtonComponent ],
      providers: [
        DemoDataService
      ],
      imports: [
        DxDropDownButtonModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DropDownButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    const mock = jest.spyOn(component,'logAction')
    event = {
      itemdata:[]
    }
    component.logAction(event);
    expect(mock).toBeCalled();
  });
});
