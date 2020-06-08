import { Component } from '@angular/core';
import {FormControl,FormGroup} from '@angular/forms'
import {Validators} from '@angular/forms'
import { Router } from '@angular/router';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {Book} from '../book/book.component';

@Component({
  selector: 'app-modal-content-component',
  templateUrl:'./app.model.content.component.html'
})

export class AppModalContentComponent {
  booksControl=new FormGroup({
    bookTitle:new FormControl('',Validators.required),
    authorName:new FormControl('',Validators.required),
    isbn:new FormControl('',Validators.required),
    totalPage:new FormControl('',Validators.required),
    publisherId:new FormControl('',Validators.required),
    publisherName:new FormControl('',Validators.required),
    publishDate:new FormControl('',Validators.required),
    publisherAddress:new FormControl('',Validators.required),
    bookShelfNumber:new FormControl('',Validators.required),
    price:new FormControl('',Validators.required)
  });

  constructor(public activeModal: NgbActiveModal) {};
  get f() { return this.booksControl.controls; }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.booksControl.value);
  }
}