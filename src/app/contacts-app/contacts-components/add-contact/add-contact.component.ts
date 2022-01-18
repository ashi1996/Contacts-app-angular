import { Component, OnInit , Input , OnChanges, SimpleChanges , Output , EventEmitter} from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Contact } from '../../contacts-models/contact.interface';

@Component({
  selector: 'add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit, OnChanges {

@Input()
onPressEdit

@Output()
editContact = new EventEmitter<Contact>()

@Output()
createContact = new EventEmitter<Contact>()

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

  ngOnChanges(changes: SimpleChanges): void {
     if(changes['onPressEdit'].currentValue){
       this.addContactForm.patchValue(changes['onPressEdit'].currentValue)
     }
  }

  errorValidation(controlName:string , error:string){
    if(this.addContactForm.get(controlName)?.hasError(error) && this.addContactForm.get(controlName)?.untouched){
      return false
    }
    return  true
  }

  onSub(){
    // Edit
    if(this.onPressEdit){
      if(window.confirm(`Are you sure you want to edit ${this.onPressEdit.firstName}  ${this.onPressEdit.lastName}?`)){
       let toUpdate = {...this.onPressEdit, ...this.addContactForm.value}
       this.editContact.emit(toUpdate)
       this.onPressEdit = undefined
      }
    }
    else{
    //  Create
    this.createContact.emit(this.addContactForm.value)

    }
    this.addContactForm.reset()
  }



}
