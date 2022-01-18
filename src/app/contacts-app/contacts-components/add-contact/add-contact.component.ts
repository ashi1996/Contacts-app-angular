import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  constructor(private formBuilder : FormBuilder) { }

  addContactForm:FormGroup = this.formBuilder.group({
    firstName: [""  , [Validators.required ,Validators.minLength(2) , Validators.maxLength(10)]],
    lastName:["" , [Validators.required ,Validators.minLength(2) , Validators.maxLength(10)]],
    email:["" , [Validators.required  ,Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]],
    phone:["" , [Validators.required , , Validators.pattern(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)]],
    imgUrl:[""],
  })


  ngOnInit() {
    
  }

  errorValidation(controlName:string , error:string){
    if(this.addContactForm.get(controlName)?.hasError(error) && this.addContactForm.get(controlName)?.untouched){
      return false
    }
    return  true
  }

  onSub(){
    console.log(this.addContactForm.value)
  }



}
