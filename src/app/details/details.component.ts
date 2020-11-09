import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Kquote } from './../kquote';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() quote: Kquote;
  @Output() deleteQ = new EventEmitter<boolean>();
  dislikes = 0;
  likes = 0;

  deleteQuote(erase: boolean){
    this.deleteQ.emit(erase);
  }
  decrementNumber(): any{
    this.dislikes++;
  }

  incrementNumber(): any{
    this.likes++;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
