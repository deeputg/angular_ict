import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{DateService} from "./myServices/date.service"
import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';

import {ValidateService} from './myServices/validate.service'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DateService,ValidateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
