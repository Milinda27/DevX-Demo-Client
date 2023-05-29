import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import 'devextreme/data/odata/store';
import { Observable } from 'rxjs';
import { User } from '../shared/models/user';

interface Employee {

  ID: number;
    
  FirstName: string;
    
  LastName: string;
    
  Position: string;
  
}


@Injectable({
  providedIn: 'root'
})
export class DemoDataService {

  constructor(private http:HttpClient) { 
    
  }

  employees: Employee[] = [
    { ID: 1, FirstName: 'John', LastName: 'Doe', Position: 'Manager' },
    { ID: 2, FirstName: 'Jane', LastName: 'Doe', Position: 'Developer' },
    { ID: 3, FirstName: 'Bob', LastName: 'Smith', Position: 'Developer' },
    { ID: 4, FirstName: 'Alice', LastName: 'Smith', Position: 'Manager' }
  ];

  actions: Array<{id: number, text: string, icon: string}> = [
    { id: 1, text: "My profile", icon: "user" },
    { id: 2, text: "Messages", icon: "email" },
    { id: 3, text: "Contacts", icon: "group" },
    { id: 4, text: "Log out", icon: "runner" }
  ];

  getDataSource():DataSource{
    return new DataSource({
      store: {
        type: 'odata',
        url: 'https://js.devexpress.com/Demos/DevAV/odata/Products',
        key: 'Product_ID',
      },
      select: [
        'Product_ID',
        'Product_Name',
        'Product_Cost',
        'Product_Sale_Price',
        'Product_Retail_Price',
        'Product_Current_Inventory'
      ],
      filter: ['Product_Current_Inventory', '>', 0],
    });
  }

  getProducts():Observable<unknown>{
    return this.http.get('https://js.devexpress.com/Demos/DevAV/odata/Products');
    
  }
  getUsers():Observable<User[]>{
    return this.http.get<User[]>('https://localhost:7236/odata/Users');
  }

  getEmployees():Employee[]{
    return this.employees;
  }

  getActions():Array<{id: number, text: string, icon: string}>{
    return this.actions;
  }
}
