import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () =>
      import('./feature/home/home.routes').then((m) => m.routes),
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
