import { Component, OnInit, Input } from '@angular/core';
import { Kquote } from './../kquote';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() quote: Kquote;
  constructor() { }

  ngOnInit(): void {
  }

}
