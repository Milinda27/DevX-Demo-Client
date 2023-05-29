import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-material-form',
  templateUrl: './material-form.component.html',
  styleUrls: ['./material-form.component.scss']
})
export class MaterialFormComponent implements OnInit {

  form: FormGroup;
  constructor(
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      firstName: [null,Validators.required],
      lastName: [null,Validators.required],
      position: [null,Validators.required],
      gender: [null,Validators.required],
    });
   }

  ngOnInit(): void {
  }

onFormSubmit(value:any){
  if(this.form.valid){
    console.log(value);
    
  }
}

}
