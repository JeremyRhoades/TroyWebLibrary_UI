import { Component, Inject, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { Book } from '../../models/book.model';
import { Review } from '../../models/review.model';
import { AsyncPipe } from '@angular/common';
//import { HttpTestingController } from '@angular/common/http/testing';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'login',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
 
})

@Injectable({ providedIn: 'root' })
export class LogInComponent {

  
        logInForm = new FormGroup({
          email: new FormControl<string>(''),
          password: new FormControl<string>(''),
        })
        
        onLogInFormSubmit() {
          console.log(this.logInForm.value.email)
          this.userService.logInUser(
            this.logInForm.value.email,
            this.logInForm.value.password
          );
        }
      
        
        deleteUserForm = new FormGroup({
          deleteUserId: new FormControl<string | null>(null)
        })
      
        
        /**** USERS ****/
        users$!: Observable<User[]>;
      
        constructor(private userService: UserService) {}
        ngOnInit(): void {
          //this.users$ = this.userService.getUsers();
        }

}



/*****************************/
/*********   USERS   *********/
/*****************************/
@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {}

  logInUser(email:any, password:any) {
    const logInInfo = {
      "email": email,
      "password": password
    }
    return this.http.post('https://localhost:7282/api/Users', logInInfo).subscribe
    ({
      next: (value) =>{
      console.log(value);
      }
    });
  }

  logOutUser(): Observable<User[]> {
    return this.http.get<User[]>('https://localhost:7282/api/Users');
  }

}