import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserType } from 'src/app/shared/models/enums';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-demo-detail-view',
  templateUrl: './demo-detail-view.component.html',
  styleUrls: ['./demo-detail-view.component.scss']
})
export class DemoDetailViewComponent implements OnInit {
  @Input() user?:User;
  @Input() editMode=false;
  @Output() addNewEvent:EventEmitter<User> = new EventEmitter<User>();
  @Output() updateEvent:EventEmitter<User> = new EventEmitter<User>();
  @Output() deleteEvent:EventEmitter<User> = new EventEmitter<User>();
  form: FormGroup = new FormGroup({});
  userTypeEnum = UserType;
  // userTypes:[{key:string,value:string}];
  userTypes:string[];
  constructor(
    private formBuilder: FormBuilder
  ) {
      this.userTypes = Object.keys(this.userTypeEnum);
   }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {}
  
  ngOnChanges(changes:SimpleChanges):void{
    this.createForm();
    
  }
  
  createForm():void{
    if(this.user != undefined && this.editMode){
      this.form = this.formBuilder.group({
        firstName: [this.user.FirstName,Validators.required],
        lastName: [this.user.LastName,Validators.required],
        email: [this.user.Email,Validators.required],
        position: [this.user.Position,Validators.required],
        dob: [this.user.DoB,Validators.required],
      });
      console.log("from update form");
    }else if(this.user == undefined && !this.editMode){
      this.form = this.formBuilder.group({
        firstName: [null,Validators.required],
        lastName: [null,Validators.required],
        email: [null,Validators.required],
        position: [null,Validators.required],
        dob: [null,Validators.required],
      });
      console.log("from new empty form");
    }
  }

  onFormSubmit($event:User){
    if(this.user == undefined && this.form.valid){
      this.user = $event;
      this.addNewEvent.emit(this.user)
      this.user = undefined;
    }
    // console.log($event);
    else if(this.user != undefined && this.form.valid){
      const tempUser = $event;
      tempUser.ID = this.user.ID;
      this.updateEvent.emit(tempUser)
    }
  }

  onDelete(){
    // console.log("from delete");
    if(this.user != undefined)
      this.deleteEvent.emit(this.user);
    
  }

}
