import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  imports: [FormsModule],
  templateUrl: './search-book.html',
  styleUrls: ['./search-book.css']
})
export class SearchBook {
  searchTerm: string = '';

  @Output() searchChanged = new EventEmitter<string>();

  onSearchChange() {
    this.searchChanged.emit(this.searchTerm);
    console.log('Search Term:', this.searchTerm);
  }
}
