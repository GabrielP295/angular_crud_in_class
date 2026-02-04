import { Routes } from '@angular/router';
import { CreateUsers } from './create-users/create-users';
import { ReadUsers } from './read-users/read-users';
import { UpdateUsers } from './update-users/update-users';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'create-users',
        pathMatch: 'full',
    },
    {
        path: 'create-users',
        component: CreateUsers,
    },
    {
        path: 'read-users',
        component: ReadUsers,
    },
    {
        path: 'update-users/:email',
        component: UpdateUsers,
    }
];
