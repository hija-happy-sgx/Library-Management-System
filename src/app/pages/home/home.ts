import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { BookSection } from '../../components/book-section/book-section';

@Component({
  selector: 'app-home',
  imports: [Hero, BookSection],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

}
