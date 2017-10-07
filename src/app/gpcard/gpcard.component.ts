import { Component, OnInit, OnChanges, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-gpcard',
  templateUrl: './gpcard.component.html',
  styleUrls: ['./gpcard.component.css']
})
export class GpcardComponent implements OnInit {
  
  @Input('obj') obj: any;

  constructor() { }

  ngOnInit() {
    
  }

}
