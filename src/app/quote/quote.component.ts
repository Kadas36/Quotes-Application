import { Component, OnInit } from '@angular/core';
import { Kquote } from './../kquote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Kquote[] = [
    new Kquote('Keep up', 'Kadas', 'Thomas'),
    new Kquote('Old is Gold', 'Kadas', 'Thomas'),
    new Kquote('Necessity is the mother of invention', 'Kadas', 'Thomas'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
