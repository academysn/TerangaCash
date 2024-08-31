import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'historique',
    loadComponent: () => import('./composants/historique/historique.page').then( m => m.HistoriquePage)
  },
  // {
  //   path: 'paiement',
  //   loadComponent: () => import('./composants/paiement/paiement.page').then( m => m.PaiementPage)
  // },
  {
    path: 'scanner',
    loadComponent: () => import('./composants/scanner/scanner.page').then( m => m.ScannerPage)
  },
  {
    path: 'retraits',
    loadComponent: () => import('./composants/retraits/retraits.page').then( m => m.RetraitsPage)
  },

  {
    path: 'paiement',
    children: [
      {
        path: '',
        loadComponent: () => import('./composants/paiement/paiement.page').then( m => m.PaiementPage),
      },
      {
        path: ':id',
        loadComponent: () => import('./composants/paiement/sponsor/sponsor.page').then( m => m.SponsorPage)
      },
    ],
  },

  // {
  //   path: 'sponsor',
  //   loadComponent: () => import('./composants/paiement/sponsor/sponsor.page').then( m => m.SponsorPage)
  // },
];
