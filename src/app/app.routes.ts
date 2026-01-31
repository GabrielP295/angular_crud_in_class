import { Routes } from '@angular/router';
import { CreateUsers } from './create-users/create-users';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full',
    },
    {
        path: 'create-users',
        component: CreateUsers,
    },
];
