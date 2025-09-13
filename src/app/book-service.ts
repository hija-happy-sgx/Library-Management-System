import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { catchError, tap } from 'rxjs/operators';


export interface Book {
  title: string;
  authors: string;
  subtitle:string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})

export class BookService {
   private apiUrl = 'https://www.dbooks.org/api';

   constructor(private http: HttpClient){}

   getRecentBooks(): Observable<any>{
    return this.http.get<{books: Book[]}>(`${this.apiUrl}/recent`)
    .pipe(tap(
      response => console.log("bookss", response)),
      catchError(error => {
      console.error('Error fetching recent books:', error);
      return throwError(() => error); // re-throw error so component can handle if needed
    })
    ); 
   }

  searchBook(query: string): Observable<any>{
    return this.http.get<{books: Book[]}>(`${this.apiUrl}/search/${query}`)
  }
}
