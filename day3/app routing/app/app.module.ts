import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NewEmployeeComponent } from './new-employee/new-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import {RouterModule,Routes} from '@angular/router';
import {CurdateService} from './curdate.service'
import {CookieService} from 'angular2-cookie'
import {FormsModule} from'@angular/forms'

const appRoutesVar:Routes = [
  {path:"",component:ViewEmployeeComponent},
  {path:"new",component:NewEmployeeComponent},
  {path:"delete",component:DeleteEmployeeComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    NewEmployeeComponent,
    ViewEmployeeComponent,
    DeleteEmployeeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutesVar),FormsModule
  ],
  providers: [CurdateService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
