import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { from } from 'rxjs';
import { Kquote } from './../kquote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  newKquote = new Kquote('', '', '');
  @Output () addKquote = new EventEmitter<Kquote>();

  submitKquote(){
    this.addKquote.emit(this.newKquote);
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
