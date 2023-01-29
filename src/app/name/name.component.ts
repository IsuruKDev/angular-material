import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit{

  form: FormGroup = new FormGroup({});

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName:[null, Validators.required],
      lastName:[null, Validators.required],
      address:[null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
      dob:[null, Validators.required],
      gender:[null, Validators.required],
      email:[null, Validators.compose([Validators.required, Validators.email])],
      country:[null]
    });
  }

  onFormSubmit(form:any){
    console.log(form.value); 
  }
}
