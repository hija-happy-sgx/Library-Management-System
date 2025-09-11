import { Component} from '@angular/core';
import booksData from '../../books.json';
import { BookCard } from '../book-card/book-card';
import { NgForm } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { SearchBook } from '../search-book/search-book';
@Component({
  selector: 'app-book-section',
  imports: [BookCard, CommonModule, SearchBook],
  templateUrl: './book-section.html',
  styleUrl: './book-section.css'
})
export class BookSection {
books = [
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    description: "A shocking psychological thriller of a woman’s act of violence against her husband—and of the therapist obsessed with uncovering her motive.",
    coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=400&h=600&fit=crop"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    description: "An easy & proven way to build good habits and break bad ones.",
    coverImage: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    description: "A memoir about a woman who leaves her survivalist family and goes on to earn a PhD from Cambridge.",
    coverImage: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&h=600&fit=crop"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    description: "The memoir of the former First Lady of the United States, exploring her roots and how she found her voice.",
    coverImage: "https://images.unsplash.com/photo-1524985069026-dd778a71c7b4?w=400&h=600&fit=crop"
  },
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    description: "A brief history of humankind, exploring how Homo sapiens came to dominate the Earth.",
    coverImage: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=600&fit=crop"
  },
  {
    title: "The Night Circus",
    author: "Erin Morgenstern",
    description: "A magical competition between two young illusionists at a mysterious circus that only opens at night.",
    coverImage: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=600&fit=crop"
  }
];
    filteredBooks = [...this.books];

    onSearch(searchTerm: string){
      const lowerTerm = searchTerm.toLowerCase();

      this.filteredBooks = this.books.filter(b=>
        b.title.toLowerCase().includes(lowerTerm)
      );
    }
}

