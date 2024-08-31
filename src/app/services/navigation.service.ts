import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  constructor(private router: Router) {}

  goToScanner() {
    this.router.navigate(['/scanner'], { queryParams: { segment: 'ma-carte-qr' } });
  }

  goToHistorique() {
    this.router.navigate(['/historique']);
  }

  goToRetraits() {
    this.router.navigate(['/retraits']);
  }

  goToPaiement() {
    this.router.navigate(['/paiement']);
  }

  triggerOpenCarte() {
    const openCarteButton = document.getElementById('open-carte');
    if (openCarteButton) {
      openCarteButton.click();
    }
  }
}
