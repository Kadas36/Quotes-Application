import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Kquote } from './../kquote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  newKquote = new Kquote( '', '', '');
  @Output() addKquote = new EventEmitter<Kquote>();
  submitKquote(): any{
    this.addKquote.emit(this.newKquote);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
