import { Component, OnInit } from '@angular/core';
import { $ } from 'protractor';
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
