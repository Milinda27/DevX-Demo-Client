import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoGridComponent } from './demo-grid.component';
import { DevExtremeModule, DxDataGridComponent } from 'devextreme-angular';
import dxDataGrid from 'devextreme/ui/data_grid';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('DemoGridComponent', () => {
  let component: DemoGridComponent;
  let fixture: ComponentFixture<DemoGridComponent>;
  let dataGridMock: DxDataGridComponent;

  beforeEach(async () => {

    dataGridMock = {
      instance:{
        addRow:jest.fn(),
      } as unknown as  dxDataGrid<any,any>
    } as DxDataGridComponent;
    await TestBed.configureTestingModule({
      declarations: [ DemoGridComponent ],
      providers:[
        { provide: DxDataGridComponent, useValue: dataGridMock },
      ],
      imports: [
        HttpClientTestingModule,
        DevExtremeModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
