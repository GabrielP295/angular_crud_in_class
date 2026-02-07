import { Routes } from '@angular/router';
import { CreateGroceries } from './pages/create-groceries/create-groceries';
import { ReadGroceries } from './pages/read-groceries/read-groceries';
import { UpdateGroceries } from './pages/update-groceries/update-groceries';
import { DeleteGroceries } from './pages/delete-groceries/delete-groceries';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'create-groceries',
        pathMatch: 'full',
    },
    {
        path: 'create-groceries',
        component: CreateGroceries,
    },
    {
        path: 'read-groceries',
        component: ReadGroceries,
    },
    {
        path: 'edit-groceries/:id',
        component: UpdateGroceries,
    },
    {
        path: 'delete-groceries/:id',
        component: DeleteGroceries,
    },
];
