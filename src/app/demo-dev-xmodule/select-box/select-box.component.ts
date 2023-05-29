import { Component, OnInit } from '@angular/core';
import { DemoDataService } from '../demo-data.service';
import DataSource from 'devextreme/data/data_source';


@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss']
})
export class SelectBoxComponent implements OnInit {
  
  products:DataSource;
  employees = [
    { ID: 1, FirstName: 'John', LastName: 'Doe', Position: 'Manager' },
    { ID: 2, FirstName: 'Jane', LastName: 'Doe', Position: 'Developer' },
    { ID: 3, FirstName: 'Bob', LastName: 'Smith', Position: 'Developer' },
    { ID: 4, FirstName: 'Alice', LastName: 'Smith', Position: 'Manager' }
  ];

  constructor(
    dataService: DemoDataService
  ) { 
    this.products = dataService.getDataSource();

  }
  
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit() {}

  onValueChanged($event: unknown):void {
    console.log($event);
  }

  

}
