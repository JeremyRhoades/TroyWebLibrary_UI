import { Component, Inject, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../../models/book.model';
import { AsyncPipe, NgOptimizedImage } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'books',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, FormsModule, ReactiveFormsModule, NgOptimizedImage],
  templateUrl: './books.component.html'
})

@Injectable({ providedIn: 'root' })
export class ViewBooksComponent {

  //Use to reference list of books in HTML
  books$!: Observable<Book[]>;

  //Use to handle forms
  checkOutBookForm = new FormGroup({
    checkOutBookId: new FormControl<string | null>(null)
  })
  

  onCheckOutBookSubmit(checkOutBookId:any) {
    this.bookService.checkOutBook(checkOutBookId);
  }

  //On page load, populate list of books
  constructor(private bookService: BookService) {}
  ngOnInit(): void {
    this.books$ = this.bookService.getBooks();
  }
}


/************************************/
/*********   View Books   *********/
/************************************/
@Injectable({providedIn: 'root'})
export class BookService {
  constructor(private http: HttpClient) {}

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>('https://localhost:7282/api/Books');
  }

  addBook(firstName:any, lastName:any, birthDate:any, email:any, phone:any, role:any) {
    const newBook = {
      "firstName": firstName,
      "lastName": lastName,
      "birthDate": birthDate,
      "email": email,
      "phone": phone,
      "role": role
    }
    return this.http.post('https://localhost:7282/api/Books', newBook).subscribe
    ({
      next: (value) =>{
      console.log(value);
      }
    });
  }

  
  checkOutBook(id:any) {
    console.log(id);

    /*return this.http.post('https://localhost:7282/api/Book/id:guid?id=' + id).subscribe
    ({
      next: (value) =>{
      console.log(value);
      }
    });*/
  }
}