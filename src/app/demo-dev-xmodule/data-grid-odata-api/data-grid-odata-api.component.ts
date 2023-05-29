import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { DemoDataService } from '../demo-data.service';

@Component({
  selector: 'app-data-grid-odata-api',
  templateUrl: './data-grid-odata-api.component.html',
  styleUrls: ['./data-grid-odata-api.component.scss']
})
export class DataGridOdataApiComponent implements OnInit {
  dataSource: DataSource;
  users:unknown;
  
  constructor(
    private dataService:DemoDataService
  ) {
    this.dataSource = new DataSource({
      store: {
        type: 'odata',
        url: 'https://localhost:7290/odata/Users',
        key: 'ID',
        version: 4,
      },
      
    });
    this.getUsers();
  }

  getUsers():void{
    this.dataService.getUsers().subscribe(
      (data) => {this.users = data;
      console.log(data);},
      (err) => {
        console.log(err);
        throw err;       
      }
    );
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}

}
