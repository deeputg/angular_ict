import { Component, OnInit } from '@angular/core';
import {CurdateService} from '../curdate.service'
import {CookieService} from "angular2-cookie"


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  hello;
  name;
  dogArray=[];
  constructor(private ds:CurdateService,private cs:CookieService) { 
    this.hello = this.ds.getHello();
  }

  ngOnInit() {
  }
  getCookie(cookieName){
    this.name = this.cs.get(cookieName)
  }
  getLocalStorage(key){
    this.name = localStorage.getItem(key);
  }
  getSessionStorageDog(){
    
    let item = JSON.parse(sessionStorage.getItem("dogArray"));
    this.dogArray.push(item);
  }

}
