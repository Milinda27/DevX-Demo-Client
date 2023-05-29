import { Component, OnInit } from '@angular/core';
import { DemoDataService } from '../demo-data.service';
import { event } from 'devextreme/events';

interface Employee {
  ID: number;
    
  FirstName: string;
    
  LastName: string;
    
  Position: string;

  hireDate?: Date;

  notes?: string;

  priority?: string;
}
@Component({
  selector: 'app-demo-form',
  templateUrl: './demo-form.component.html',
  styleUrls: ['./demo-form.component.scss']
})
export class DemoFormComponent implements OnInit {

  employees:Employee[];
  employee:Employee;
  isFormReadOnly:any = false;
  selectionPriorityId: unknown;
  colorPriority: string;
  priorities: string[] = [
    'Low',
    'Normal',
    'Urgent',
    'High',
  ];
  submitedDetails: unknown = {};
  
  onValueChanged($event: any) : void {
    this.colorPriority = this.priorities.find((p:string)=>
      p == $event.value
    ) as string;
    this.employee['priority'] = this.colorPriority;
  }
  constructor(
    dataService:DemoDataService
  ) {
    this.employees = dataService.getEmployees();
    this.employee = this.employees[0]
    this.employee.hireDate = new Date(2020,8,29)
    this.selectionPriorityId = this.priorities[0];
    this.employee.notes = 'good'
    
    this.colorPriority = this.priorities[2];
    this.employee['priority'] = this.colorPriority;
  }
  
  hireDateOptions = {
    disabled: true
  }
  
  submitButtonOptions = {
    text: "Submit the Form",
    align:"center",
    useSubmitBehavior: true
  }

  form_fieldDataChanged($event: any):void {
    this.employee = $event.component.option("formData");
  }
  
  handleSubmit($e:Event):void {
    console.log($e)        
    this.submitedDetails = this.employee;
    console.log(this.submitedDetails);
    
  $e.preventDefault(); // prevents propagation of submit event
}

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}

}
