import { Component, OnInit } from '@angular/core';
import { concat } from 'rxjs';
import { Contact } from '../../contacts-models/contact.interface';
import { ApiService } from '../../services/apiService/apiService.service';
import { Store } from '../../store/store';
import { State } from '../../store/store-state.interace';

@Component({
  selector: 'view-contacts',
  templateUrl: './view-contacts.component.html',
  styleUrls: ['./view-contacts.component.scss']
})
export class ViewContactsComponent implements OnInit {

  constructor(private store : Store , private apiService :ApiService) { }

  contacts:Contact[] = []
  onPressEdit:Contact = undefined
  
  
  ngOnInit() {
  //  update store frome server
    this.apiService.getContacts$.subscribe(dataFromeServer=>{
      this.store.set('contacts' , dataFromeServer)
    })
 // get data from store
    this.store.getStore().subscribe(data=>{
     this.contacts = data['contacts']
    })

  }

  delContact(delContact:Contact){
    this.apiService.deleteContact(delContact.id)
    
    let updateContact = this.contacts.filter((contact:Contact)=> {
      return delContact.id !== contact.id
    })
   this.store.set('contacts' , updateContact)
  
  }


  createContact(newContact:Contact){
    newContact.id =  Date.now()
    this.apiService.addContact(newContact)
    let newContacts:Contact[] = [...this.contacts]
    newContacts.unshift(newContact)
    this.store.set('contacts' , newContacts)
  }

  editContact(newContact:Contact){
    
    this.apiService.editContact(newContact)
    
    let tempContact:Contact[] = this.contacts.map((contact:Contact)=>{
      if(contact.id === newContact.id){
        return {...contact , ...newContact}
      }
      return contact
    })
    this.store.set('contacts' , tempContact)
  }

  onPressEditContact(editContact:Contact){
   this.onPressEdit = editContact
  }


}
