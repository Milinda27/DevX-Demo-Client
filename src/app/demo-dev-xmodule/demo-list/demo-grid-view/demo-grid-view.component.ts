import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import ODataStore from 'devextreme/data/odata/store';
import {User} from 'src/app/shared/models/user';

@Component({
  selector: 'app-demo-grid-view',
  templateUrl: './demo-grid-view.component.html',
  styleUrls: ['./demo-grid-view.component.scss']
})
export class DemoGridViewComponent implements OnInit {
  @ViewChild(DxDataGridComponent, { static: false }) dataGrid?: DxDataGridComponent;
  @Output() addEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() editEvent:EventEmitter<{user:User,editMode:boolean}> = new EventEmitter<{user:User,editMode:boolean}>();
  
  dataSource:ODataStore;
  selectedUser?:User;
  totalCount=0;

  buttonOptions = {
    type: 'add',
    icon : 'add',
    onClick: () =>{
      console.log("om click from child");
      
      this.addEvent.emit(false)
    }
};
  
  constructor() 
  {
    this.dataSource = new ODataStore({
        url: 'https://localhost:7290/odata/Users',
        key: 'ID',
        version: 4,

        onInserted: ()=>  this.refreshDataGrid(),
        onUpdated: ()=>  this.refreshDataGrid(),
        onRemoved: ()=>  this.refreshDataGrid(),
    });
    

    this.dataSource.totalCount({}).then(
      (count)=> this.totalCount = count,
      (error)=> {throw error}
    );
  }
  refreshDataGrid():void {
    if (this.dataGrid) {
      this.dataGrid.instance.refresh().catch(
        (err)=> {throw err;}
      );
    }
  }
  
  onRowClick($event:{data:User}):void {
    this.selectedUser = $event.data;
    this.editEvent.emit({user:this.selectedUser,editMode:true});
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

}
