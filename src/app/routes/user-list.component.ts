import { Component, Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';
import { AsyncPipe } from '@angular/common';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'user-list',
  //standalone: true,
  imports: [AsyncPipe, FormsModule, ReactiveFormsModule],
  templateUrl: './user-list.component.html'
})

@Injectable({ providedIn: 'root' })
export class UserListComponent {
  
  //Use to reference users in HTML
  users$!: Observable<User[]>;

  //Handle user delete form
  deleteUserForm = new FormGroup({
    deleteUserId: new FormControl<string | null>(null)
  })
  
  onUserDeleteFormSubmit(deleteUserId:any) {
    this.userService.deleteUser(deleteUserId);    
  }
  
  //On page load, populate list of users
  constructor(private userService: UserService) {}
  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}


/************************************/
/*********  Manage  Users   *********/
/***********************************/
@Injectable({providedIn: 'root'})
export class UserService {
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://localhost:7282/api/Users');
  }

  deleteUser(id:any) {

    return this.http.delete(`https://localhost:7282/api/Users/id:guid?id=${id}`).subscribe
    ({
      next: (value) =>{
      console.log(value);
      }
    });
  }

}

