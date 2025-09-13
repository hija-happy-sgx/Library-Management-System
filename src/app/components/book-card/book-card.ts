import { Component, Input } from '@angular/core';
import { Book, BookService } from '../../book-service';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css'
})
export class BookCard {
  @Input() book!:Book;


}