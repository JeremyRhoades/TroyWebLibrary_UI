import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'signup',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html'
})

@Injectable({ providedIn: 'root' })
export class SignUpComponent {

    //Use to reference users in HTML
    users$!: Observable<User[]>;
    
    //HttpClient
    constructor(private http: HttpClient, private router: Router) {}

    //Retrieve form data
    signUpForm = new FormGroup({
    firstName: new FormControl<string>(''),
    lastName: new FormControl<string>(''),
    email: new FormControl<string | null>(null),
    phone: new FormControl<string | null>(null),
    role: new FormControl<string>('Customer'),
    birthDate: new FormControl<string>(''),
    password: new FormControl<string>(''),
    })
    
    onSignUpFormSubmit() {
        const newUser = {
            "firstName": this.signUpForm.value.firstName,
            "lastName": this.signUpForm.value.lastName,
            "birthDate": this.signUpForm.value.birthDate,
            "email": this.signUpForm.value.email,
            "password": this.signUpForm.value.password,
            "phone": this.signUpForm.value.phone,
            "role": this.signUpForm.value.role
         }
      this.http.post('https://localhost:7282/api/Users', newUser).subscribe
      ({
        next: (value) =>{
        console.log(value);
        console.log('attempting route');
        this.router.navigateByUrl('/user-list');
        console.log('route attempted');
        }
      });
    }

}
