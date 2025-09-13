import { Component, OnInit} from '@angular/core';
import booksData from '../../books.json';
import { BookCard } from '../book-card/book-card';
import { NgForm } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { SearchBook } from '../search-book/search-book';
import { Book , BookService} from '../../book-service';
@Component({
  selector: 'app-book-section',
  imports: [BookCard, CommonModule, SearchBook],
  templateUrl: './book-section.html',
  styleUrl: './book-section.css'
})
export class BookSection implements OnInit {
  books: Book[] = [];
  filteredBooks: Book[] = [];

  constructor(private bookService: BookService) {}

 ngOnInit(): void {
   this.bookService.getRecentBooks().subscribe(response =>{
    this.books = response.books;
    this.filteredBooks = response.books;
   })
 }

 onSearch(searchTerm: string) {
  if (!searchTerm) {
    this.filteredBooks = [...this.books];
  } else {

    this.bookService.searchBook(searchTerm).subscribe({
      next: (response) => {
        this.filteredBooks = response.books;
      },
      error: (err) => {
        console.error('Search error:', err);
      }
    });
  }
}

}

