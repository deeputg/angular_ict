import { Component, OnInit } from '@angular/core';
import {CookieService} from 'angular2-cookie'

@Component({
  selector: 'app-new-employee',
  templateUrl: './new-employee.component.html',
  styleUrls: ['./new-employee.component.css']
})
export class NewEmployeeComponent implements OnInit {

  empName:String= "";
  dogName;
  dogType;
  constructor(private cs:CookieService) { }

  ngOnInit() {
  }
  setCookie(){
    this.cs.put("test","Meera");
    console.log("cookie test value set");
  }
  getCookie(){
    this.empName = this.cs.get("test");
  }
  setLocalStroge(){
    localStorage.setItem("user","stanly")
  }
  getLocalStroge(){
    this.empName =localStorage.getItem("user")
  }
  setSessionStorage(){
    sessionStorage.setItem("userName","Deepu");
  }
  getSessionStorage(){
    this.empName =sessionStorage.getItem("userName");
  }
  setSessionStorageDog(){
    let item = {dogName:this.dogName,dogType:this.dogType}
    sessionStorage.setItem("dogArray",JSON.stringify(item));
  }

}
