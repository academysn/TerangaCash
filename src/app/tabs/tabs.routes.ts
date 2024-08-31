import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('./tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('./tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('./tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'omoney',
        loadComponent: () =>
          import('./omoney/omoney.page').then((m) => m.OmoneyPage),
      },
      {
        path: 'ligne',
        loadComponent: () =>
          import('./ligne/ligne.page').then((m) => m.LignePage),
      },
      {
        path: 'boutique',
        loadComponent: () =>
          import('./boutique/boutique.page').then((m) => m.BoutiquePage),
      },
      {
        path: 'scanner',
        redirectTo: '/scanner', // Redirection vers /scanner
        pathMatch: 'full'
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];
