import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurdateService {

  constructor() { }
  getHello(){
    return "Hello";
  }
}
