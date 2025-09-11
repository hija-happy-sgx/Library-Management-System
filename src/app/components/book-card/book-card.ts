import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-book-card',
  imports: [],
  templateUrl: './book-card.html',
  styleUrl: './book-card.css'
})
export class BookCard {
  @Input() book!: {
    title: string;
    author: string;
    description: string;
    coverImage: string;
}
};
