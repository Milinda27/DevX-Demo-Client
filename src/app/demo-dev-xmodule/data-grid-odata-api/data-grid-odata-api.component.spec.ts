import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridOdataApiComponent } from './data-grid-odata-api.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DemoDataService } from '../demo-data.service';
import { of } from 'rxjs';
import { DxDataGridModule } from 'devextreme-angular';

const user = {
  ID : 1,
  FirstName : 'msn',
  LastName : 'carter',
  Position : 'developer'
}
class DataServiceMock {
  getUsers(){
    return of([user]);
  }
}

describe('DataGridOdataApiComponent', () => {
  let component: DataGridOdataApiComponent;
  let fixture: ComponentFixture<DataGridOdataApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataGridOdataApiComponent ],
      providers:[
        {
          provide:DemoDataService,
          useValue:new DataServiceMock()
        }
      ],
      imports:[
        HttpClientTestingModule,
        DxDataGridModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridOdataApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should set the value of users variable', () => {
    component.users = [];
    component.getUsers();
    expect(component.users).toEqual([user]);
  });
});
