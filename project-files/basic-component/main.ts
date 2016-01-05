import {Component, OnInit} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
//
@Component({
  selector: 'app',
  template: `<h1> Hello {{name}} </h1> `
})

class HelloAngular implements OnInit  {
  name: string;
  constructor() { console.log('constructor called'); this.name = 'NG'; }
  ngOnInit() { console.log('component initialized'); }
}

bootstrap(HelloAngular, []);
