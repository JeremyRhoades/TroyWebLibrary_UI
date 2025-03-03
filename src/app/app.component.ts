import { Component, Inject, Injectable } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { Book } from '../models/book.model';
import { Review } from '../models/review.model';
import { AsyncPipe } from '@angular/common';
//import { HttpTestingController } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  //standalone: true,
  imports: [RouterOutlet, RouterLink, AsyncPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
  /*,template: `
    @if (user$ | async; as user) {
      <p>Name: {{ user.name }}</p>
      <p>Biography: {{ user.biography }}</p>
    }
  `,*/
})

@Injectable({ providedIn: 'root' })
export class AppComponent {
 

}

