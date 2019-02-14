import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
name:String = "Ram";
age :Number = 40;
email:String = "default@example.com";
address:{Street:String,city:String}
hobbies:String[];
cars ;
carVisibility:Boolean=false;
showBtn:Boolean=true;
hideBtn:Boolean=false;
textBoxValue;
carNames;
  constructor() {

  }

  ngOnInit() {
    this.name="onInit Name"
    this.age = 20
    this.email = "sample@sample.com"
    this.address = {Street:"Shalimar",city:"kakkanad"}
    this.hobbies = ["read","swing"]
    this.cars = [{ name:"Ford", models:"Fiesta" },
    { name:"BMW", models: "X5" },
    { name:"Fiat", models: "Panda"  }]
  }

  addHobby(){
    this.name="Deepu";
    this.cars.push({name:"maruthi",models:"800"})
  }
  removeHobby(){
    this.name="Deepu";
    this.cars.pop()
  }
  showCars(){
    if(this.carVisibility==true){
    this.carVisibility=false;
    this.showBtn=true;
    this.hideBtn=false;
    }
    else{
    this.carVisibility=true;
    this.showBtn=false;
    this.hideBtn=true;
    }
  }
  updateName(){
    this.name=this.textBoxValue
  }
  addCar(){
    this.cars.push({name:this.carNames})
  }
  removeThisItem(i:Number){
    
  }

}
