import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from './navigation.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private  services  = [
    {id: 1, image: 'assets/images/woyofal.png', name: 'Paiement', action: () => this.navigationService.goToPaiement(), favoris:'oui' },
    {id: 2, image: 'assets/images/woyofal.png', name: 'Activer ma carte', action: () => this.navigationService.triggerOpenCarte(), favoris:'oui' },
    {id: 3, image: 'assets/images/woyofal.png', name: 'Historique', action: () => this.navigationService.goToHistorique(), favoris:'oui' },
    {id: 4, image: 'assets/images/woyofal.png', name: 'Retrait', action: () => this.navigationService.goToRetraits(), favoris:'oui' },
    {id: 5, image: 'assets/images/woyofal.png', name: 'Retrait', action: () => this.navigationService.goToRetraits(), favoris:'' },
    {id: 6, image: 'assets/images/woyofal.png', name: 'Retrait', action: () => this.navigationService.goToRetraits(), favoris:'' },
    {id: 7, image: 'assets/images/woyofal.png', name: 'Retrait', action: () => this.navigationService.goToRetraits(), favoris:'' },
    {id: 8, image: 'assets/images/woyofal.png', name: 'Retrait', action: () => this.navigationService.goToRetraits(), favoris:'' },
  ];

  getServices() {
    return this.services;
  }

  getServicesLimited(limit: number = 4) {
    return this.services.slice(0, limit);
  }
  getServicesFavoris() {
    return this.services.filter(service => service.favoris === 'oui');
  }  

  getServiceById(id: number) {
    return this.services.find(service => service.id === id);
  }

  constructor(
    private router: Router,
    private navigationService: NavigationService
  ) { }
}
