import { Component, OnChanges, DoCheck } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <input [(ngModel)]="name" placeholder="type here" type="text">
    <h3>{{name}}</h3>
  `
})
export class AppComponent implements DoCheck  {
  name = '';

  ngDoCheck(){

  }
}
