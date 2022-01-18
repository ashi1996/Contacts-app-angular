import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContactApp } from './contact-app.component';
import { AddContactComponent } from './contacts-components/add-contact/add-contact.component';
import { HeaderComponent } from './contacts-components/header/header.component';


import { ReactiveFormsModule  } from '@angular/forms';
import { ViewContactsComponent } from './contacts-components/view-contacts/view-contacts.component';
import { MaterialModule } from '../material/materialModule';
import { ItemContactComponent } from './contacts-components/item-contact/item-contact.component';

@NgModule({
  declarations: [ContactApp,
                HeaderComponent,
                AddContactComponent,
                ViewContactsComponent,
                ItemContactComponent],

  imports:  [BrowserModule,
            ReactiveFormsModule,
            MaterialModule],

  providers: [],
  exports: [ContactApp]
  
})
export class ContactsModule { }
