import { Component, OnInit, Input } from '@angular/core';
import { Kquote } from './../kquote';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() quote: Kquote;

  dislikes = 0;
  likes = 0;
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
