import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  } from '@angular/forms';
import { MaterialModule } from '../material/materialModule';
import { HttpClientModule } from '@angular/common/http';
import { NgxTrimDirectiveModule } from 'ngx-trim-directive';

import { ContactApp } from './contact-app.component';
import { AddContactComponent } from './contacts-components/add-contact/add-contact.component';
import { HeaderComponent } from './contacts-components/header/header.component';
import { ViewContactsComponent } from './contacts-components/view-contacts/view-contacts.component';
import { ItemContactComponent } from './contacts-components/item-contact/item-contact.component';

import { Store } from './store/store';
import { ApiService } from './services/apiService/apiService.service';
import { BlockCopyPasteDirective } from './contacts-directive/blockCopyPaste.directive';

@NgModule({
  declarations: [ContactApp,
                HeaderComponent,
                AddContactComponent,
                ViewContactsComponent,
                ItemContactComponent,
                BlockCopyPasteDirective],

  imports:  [BrowserModule,
            HttpClientModule,
            ReactiveFormsModule,
            MaterialModule,
            NgxTrimDirectiveModule],

  providers: [Store ,
              ApiService],
  exports: [ContactApp]
  
})
export class ContactsModule { }
