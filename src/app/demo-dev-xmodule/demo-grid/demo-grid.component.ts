import { Component, OnInit } from '@angular/core';
import { createStore } from 'devextreme-aspnet-data-nojquery';
import { DemoDataService } from '../demo-data.service';
import 'devextreme/data/odata/store';
import DataSource from 'devextreme/data/data_source';
import CustomStore from 'devextreme/data/custom_store';



@Component({
  selector: 'app-demo-grid',
  templateUrl: './demo-grid.component.html',
  styleUrls: ['./demo-grid.component.scss']
})


export class DemoGridComponent implements OnInit {

  url=''
  dataSource:DataSource;
  dataSourceWebApi: CustomStore;
  constructor(
    dataService:DemoDataService,
  ) {
    //odata store
    this.dataSource = dataService.getDataSource();

    //web api with crud operations
    this.url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridWebApi';
    this.dataSourceWebApi = createStore({
      key: 'OrderID',
      loadUrl: `${this.url}/Orders`,
      insertUrl: `${this.url}/InsertOrder`,
      updateUrl: `${this.url}/UpdateOrder`,
      deleteUrl: `${this.url}/DeleteOrder`,
      // onBeforeSend(method:any, ajaxOptions:any) {
      //   ajaxOptions.xhrFields = { withCredentials: true };
      // },
    });
    
   }

  columns = ['ID', 'FirstName', 'LastName', 'Position'];

  // eslint-disable-next-line @typescript-eslint/no-empty-function, @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {}


}
