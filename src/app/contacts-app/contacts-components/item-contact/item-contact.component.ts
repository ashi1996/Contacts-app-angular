import { Component, OnInit , Input , Output ,EventEmitter  } from '@angular/core';
import { Contact } from '../../contacts-models/contact.interface';
import { AddContactComponent } from '../add-contact/add-contact.component';

@Component({
  selector: 'item-contact',
  templateUrl: './item-contact.component.html',
  styleUrls: ['./item-contact.component.scss']
})
export class ItemContactComponent implements OnInit {

 @Input()
 item:Contact

 @Output()
 delItem = new EventEmitter<Contact>()

 @Output()
 editItem = new EventEmitter<Contact>()

 defaulteImg:string='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Jqi7h_pKXpdIrGpzz2XQA_VTSou69xk4KA&usqp=CAU'
 
  constructor() { }

  ngOnInit() {
   
  }

  onDel(delEvent){
    
    if(window.confirm(`Are you sure you want to delete ${this.item.firstName}  ${this.item.lastName}?`)){
      this.delItem.emit(this.item)
    }
  }

  onEdit(){
    this.editItem.emit(this.item)
  }

}
