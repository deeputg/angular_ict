import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  msgFromServer;
  List=[];
  BookId;
  BookName;
  author;
  publisher;
  constructor(private httpVar:HttpClient) { }

  ngOnInit() {
    this.msgFromServer={"msg":""}
  }
  getData(){
    this.httpVar.get("http://localhost:8000/data").subscribe(data=>{
      console.log(data)
      this.msgFromServer = data;
    });
  }
  getDataFromTable(){
    this.httpVar.get("http://localhost:8000/dbconnect").subscribe(dataVar=>{
      //console.log(data)
      this.List = Array.of(dataVar);
      console.log(this.List)
    }); 
  }
  insertDataToTable(){
    let newItem = {bookId:this.BookId,bookName:this.BookName,author:this.author,publisher:this.publisher}
    
    this.httpVar.post("http://localhost:8000/dbinsert",{book:newItem}).subscribe(data=>{
      console.log(data)
    })
  }
}
