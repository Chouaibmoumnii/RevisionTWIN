import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {


  constructor(private router:Router) {
  }
  property:string="";
  show: boolean=false;
  output: string = "";
  goToChild() {
    this.show = !this.show;
  }


  getNewVal($event: string) {
    this.output = $event;
  }
}
