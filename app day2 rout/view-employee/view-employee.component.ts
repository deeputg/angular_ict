import { Component, OnInit } from '@angular/core';
import {CurdateService} from '../CurdateService'


@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  hello;
  constructor(private ds:CurdateService) { 
    this.hello = this.ds.getHello();
  }

  ngOnInit() {
  }

}
