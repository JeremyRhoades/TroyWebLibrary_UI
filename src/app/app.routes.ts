import { Routes } from '@angular/router';
import { SignUpComponent } from './routes/signup.component';
import { LogInComponent } from './routes/login.component';
import { ManageBooksComponent } from './routes/manage-books.component';
import { ViewBooksComponent } from './routes/books.component';
import { UserListComponent } from './routes/user-list.component';

export const routes: Routes = [
    {
        path:'',
        component: SignUpComponent
    },
    {
        path:'signup',
        component: SignUpComponent
    },
    {
        path:'login',
        component: LogInComponent
    },
    {
        path:'manage-books',
        component: ManageBooksComponent
    },
    {
        path:'books',
        component: ViewBooksComponent
    },
    {
        path:'user-list',
        component: UserListComponent
    }
];
