import { Component, OnInit } from '@angular/core';
import { Kquote } from './../kquote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  // newKquote = new Kquote('', '', '');
  // @Output () addKquote = new EventEmitter<Kquote>();

  // submitKquote(){
  //   this.addKquote.emit(this.newKquote);
  // }

  constructor() { }

  ngOnInit(): void {
  }

}
