import { Routes } from '@angular/router';

import { LayoutComponent } from './shared/layout/layout.component';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./feature/home/home.routes').then((m) => m.routes),
      },
    ],
  },
  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];
