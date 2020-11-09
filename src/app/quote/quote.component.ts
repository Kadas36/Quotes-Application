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
    new Kquote('Be yourself; everyone else is already taken.', 'Oscar Wilde', 'Thomas'),
    new Kquote('I have learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.', 'Maya Angelou', 'Thomas'),
    new Kquote('Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that', 'Martin Luther King Jr', 'Thomas'),
  ];

  toggleDetails(index): any{
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  quotedel(deleteQ, index): any{
    if (deleteQ) {
      this.quotes.splice(index, 1);
    }
  }

  addNewKquote(quote): any{
    this.quotes.push(quote)

  }

  constructor() { }

  ngOnInit(): void {
  }

}
