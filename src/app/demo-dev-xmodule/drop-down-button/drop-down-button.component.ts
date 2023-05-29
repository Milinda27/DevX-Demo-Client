import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { DemoDataService } from '../demo-data.service';

@Component({
  selector: 'app-drop-down-button',
  templateUrl: './drop-down-button.component.html',
  styleUrls: ['./drop-down-button.component.scss']
})
export class DropDownButtonComponent implements OnInit {
  actions: { id: number; text: string; icon: string; }[];

  constructor(
    dataService:DemoDataService
  ) { 
    this.actions = dataService.getActions();
  }

  ngOnInit(): void {
  }

  logAction(event:any){
    console.log(event.itemData)
  }
}
