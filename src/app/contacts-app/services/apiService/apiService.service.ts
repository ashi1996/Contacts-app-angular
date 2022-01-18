import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable   } from 'rxjs';
import { Store } from '../../store/store';
import { State } from '../../store/store-state.interace';
import { Contact } from '../../contacts-models/contact.interface';
@Injectable({
  providedIn: 'root'
})

export class ApiService {

  url:string = 'http://localhost:3000/contacts'
  getContacts$:Observable<State> = this.http.get<State>(this.url)

  constructor(private store : Store , private http:HttpClient) { }
  
  deleteContact(id:number){
       this.http.delete(`${this.url}/${id}` )
       .subscribe(data=>{
         console.log(data)})
  }

  addContact(contact:Contact){
       this.http.post(this.url , contact )
       .subscribe(data=>{
         console.log(data)
       })
  }

  editContact(contact:Contact){
       this.http.put(`${this.url}/${contact.id}` , contact )
       .subscribe(data=>{
         console.log(data)
       })
  }

}
