import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  links = [
      {route:'button',name:'Button'},
      {route:'dropDownButton',name:'Drop Down Button'},
      {route:'selectBox',name:'Select Box'},
      {route:'dataGrid',name:'Grid'},
      {route:'odataApiGrid',name:'OData Api Grid'},
      {route:'customDataGrid',name:'Customized Data Grid'},
      {route:'gridEvents',name:'Data Grid Events'},
      {route:'form',name:'Form'},
      {route:'materialForm',name:'Material Form'},
      {route:'listView',name:'Demo List View'},
  ];

  constructor(private router : Router) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}

  onItemClick($event: any):void {
    
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.router.navigateByUrl(`/${$event.itemData.route}`)
  }

}
