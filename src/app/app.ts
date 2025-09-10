import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { Hero } from "./hero/hero";
import { BookSection } from "./book-section/book-section";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, BookSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('library-app');
}
