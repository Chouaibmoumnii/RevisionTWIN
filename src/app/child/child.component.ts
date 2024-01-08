import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit{

  @Input() property:string="";

  @Output() output = new EventEmitter<string>();

  emittedString:string="";

  emitEvent(){
    this.output.emit(this.emittedString);
  }

  ngOnInit() {

  }

}
