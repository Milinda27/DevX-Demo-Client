import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataGridEventsComponent } from './data-grid-events.component';
import { DevExtremeModule, DxDataGridComponent } from 'devextreme-angular';
import dxDataGrid from 'devextreme/ui/data_grid';

describe('DataGridEventsComponent', () => {
  let component: DataGridEventsComponent;
  let fixture: ComponentFixture<DataGridEventsComponent>;
  let dataGridMock: DxDataGridComponent;
  let windowAlertSpy: jest.SpyInstance;

  beforeEach(async () => {
    dataGridMock = {
      instance:{
        addRow:jest.fn(),
        onEditingStart:jest.fn(),
        onInitNewRow:jest.fn(),
        onRowInserting:jest.fn(),
        onRowInserted:jest.fn(),
        onRowUpdating:jest.fn(),
        onRowUpdated:jest.fn(),
        onRowRemoving:jest.fn(),
        onRowRemoved:jest.fn(),
        onSaving:jest.fn(),
        onSaved:jest.fn(),
        onEditCanceling:jest.fn(),
      } as unknown as  dxDataGrid<any,any>
    } as DxDataGridComponent;
    await TestBed.configureTestingModule({
      declarations: [ DataGridEventsComponent ],
      providers:[
        { provide: DxDataGridComponent, useValue: dataGridMock },
      ],
      imports:[
        DevExtremeModule
      ]
    })
    .compileComponents();
    windowAlertSpy = jest.spyOn(window, 'alert');
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataGridEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {    
  jest.clearAllMocks();
});

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add event to the events array when log event is called', () => {
    const length = component.events.length;
    component.logEvent('test event');
    expect(component.events.length).toBeGreaterThan(length);
    expect(windowAlertSpy).toHaveBeenCalledWith('test event');
  });
  
  it('should return frieght/10 percentage', () => {
    const rowData = {Freight:10}
    const value = component.calculateFreight(rowData);
    expect(value).toEqual('1%');
  });

  it('should return frieght/10 percentage', () => {
    const rowData = {Freight:10}
    const value = component.calculateFreight(rowData);
    expect(value).toEqual('1%');
  });

  it('should alert the event on cell click', () => {
    const event = {rowIndex:5,columnIndex:5,displayValue:'test'}
    
    component.onCellClick(event);
    expect(windowAlertSpy).toHaveBeenCalledWith(`selected row: ${event.rowIndex} selected column: ${event.columnIndex} displayValue : ${event.displayValue}`);

  });
});
