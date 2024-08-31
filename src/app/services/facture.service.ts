import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  export class FactureService {
    
    private  factures  = [
      {id: 1, image: 'assets/images/woyofal.png', name: 'Woyofal', description:'Numéro de compteur', saisi:'Compteur' },
      {id: 2, image: 'assets/images/senelec.png', name: 'Senelec', description:'Compte de contrat', saisi:'Contrat'},
      {id: 3, image: 'assets/images/seneau.png', name: 'SEN\'EAU', description:'Votre référence', saisi:'Référence' },
      {id: 4, image: 'assets/images/canalplus.png', name: 'Canal +', description:'Numéro de carte', saisi:'Carte'},
      {id: 5, image: 'assets/images/sonatel.png', name: 'Sonatel fixe', description:'Numéro de téléphone', saisi:'Numéro'},
      {id: 6, image: 'assets/images/teranga.png', name: 'Offres Teranga', description:'Numéro de téléphone', saisi:'Numéro'},
      {id: 7, image: 'assets/images/rapido.png', name: 'Rapido' , description:'Numéro de carte', saisi:'Carte'},
      {id: 8, image: 'assets/images/xewel.png', name: 'Xewel', description:'Numéro de carte', saisi:'Carte'},
      {id: 9, image: 'assets/images/ubipharm.png', name: 'Ubipharm', description:'Votre Identifiant', saisi:'Identifiant'},
      {id: 10, image: 'assets/images/sunnamoon.png', name: 'Sunna Moon', description:'Votre référence', saisi:'Référence'},
      {id: 11, image: 'assets/images/total.png', name: 'TotalEnergies', description:'Numéro de carte', saisi:'Carte'},
      {id: 12, image: 'assets/images/ilemel.png', name: 'ILEMEL', description:'Compte de contrat', saisi:'Contrat'},
      {id: 13, image: 'assets/images/maersk.png', name: 'MAERSK', description:'Votre référence', saisi:'Référence'},
      {id: 14, image: 'assets/images/flexeau.png', name: 'Flexeau', description:'Votre référence', saisi:'Référence'},
      {id: 15, image: 'assets/images/ism.png', name: 'ISM', description:'Votre Identifiant', saisi:'Identifiant'},
      {id: 16, image: 'assets/images/samambey.png', name: 'Sama Mbey', description:'Compte de contrat', saisi:'Contrat'},
      {id: 17, image: 'assets/images/aquatech.png', name: 'Aquatech', description:'Votre référence', saisi:'Référence'},
    ];
  
    constructor() { }
  
    getFactures() {
      return this.factures;
    }
  
    getFactureById(id: number) {
      return this.factures.find(facture => facture.id === id);
    }
}
