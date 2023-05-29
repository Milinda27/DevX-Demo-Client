import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo-button',
  templateUrl: './demo-button.component.html',
  styleUrls: ['./demo-button.component.scss']
})
export class DemoButtonComponent implements OnInit {
click($event: any) {
  
  console.log("from button");
  
}
helloWorld() {
  alert('hello');
}

  constructor() { }

  ngOnInit(): void {
  }

}
