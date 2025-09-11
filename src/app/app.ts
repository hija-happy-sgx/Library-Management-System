import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { Hero } from "./components/hero/hero";
import { BookSection } from "./components/book-section/book-section";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Hero, BookSection],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('library-app');
}
