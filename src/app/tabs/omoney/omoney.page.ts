import { FormsModule } from '@angular/forms';
import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Router } from '@angular/router';

import {
  IonContent, IonCard, IonGrid, IonRow, IonCol,
  IonIcon, IonLabel, IonTitle, IonButtons, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';

import { addIcons } from 'ionicons';
import {
  swapVerticalOutline, eyeOffOutline, caretDownOutline,
  timeOutline,caretForwardOutline,qrCodeOutline,arrowForwardOutline,
  arrowBackOutline,arrowDownOutline,arrowUpOutline,
  receiptOutline,walletOutline,cardOutline} from 'ionicons/icons';

import { NavigationService } from '../../services/navigation.service';  // Assurez-vous que le chemin est correct
import { ServiceService } from '../../services/service.service';
  // Définir l'interface Facture
  interface Service {
    id: number;
    image: string;
    name: string;
    action: () => void;
  }

  interface ServiceFavoris {
    id: number;
    image: string;
    name: string;
    action: () => void;
  }

@Component({
  selector: 'app-omoney',
  templateUrl: './omoney.page.html',
  styleUrls: ['./omoney.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonCard, IonGrid, IonRow, IonCol,
    IonIcon, IonLabel, IonTitle, IonButtons, IonButton,
    ExploreContainerComponent,CommonModule
  ]
})
export class OmoneyPage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);

  public services: Service[] = [];
  public servicesFavoris: ServiceFavoris[] = [];
  private isLimited: boolean = true; // Pour savoir si on affiche les services limités ou non

  constructor(
    private router: Router,
    private serviceService: ServiceService
    // private modalController: ModalController
  ) {
    addIcons({ 
      swapVerticalOutline, eyeOffOutline, caretDownOutline,
      timeOutline,caretForwardOutline,qrCodeOutline,arrowForwardOutline,
      arrowBackOutline,arrowDownOutline,arrowUpOutline,
      receiptOutline,walletOutline,cardOutline 
    });
  }


  ngOnInit() {
    this.services = this.serviceService.getServicesLimited();
    this.servicesFavoris = this.serviceService.getServicesFavoris();
  }

  ToggleService() {
    const boutonToggler = document.getElementById('service-toggler');
    if (!boutonToggler) return; // Vérifiez que l'élément existe

    // Toggle logic
    if (this.isLimited) {
      this.services = this.serviceService.getServices(); // Affiche tous les services
      boutonToggler.querySelector('ion-icon')?.setAttribute('name', 'arrow-up-outline'); // Change l'icône
      boutonToggler.querySelector('span')!.textContent = 'Voir moins'; // Modifie le texte du bouton
    } else {
      this.services = this.serviceService.getServicesLimited(); // Affiche les services limités
      boutonToggler.querySelector('ion-icon')?.setAttribute('name', 'arrow-down-outline'); // Change l'icône
      boutonToggler.querySelector('span')!.textContent = 'Voir plus'; // Modifie le texte du bouton
    }

    // Inverse l'état
    this.isLimited = !this.isLimited;
  }

  // ToggleService() {
  //   const boutonToggler = document.getElementById('service-toggler');
  //   if (!boutonToggler) return; // Vérifiez que l'élément existe

  //   if (this.services === this.serviceService.getServicesLimited()) {
  //       this.services = this.serviceService.getServices();
  //       boutonToggler.textContent = 'Voir moins'; // Modifie le texte du bouton
  //       boutonToggler.querySelector('ion-icon')?.setAttribute('name', 'arrow-up-outline');
  //   } else {
  //       this.services = this.serviceService.getServicesLimited(); // Affiche les services limités
  //       boutonToggler.textContent = 'Voir plus'; // Modifie le texte du bouton
  //       boutonToggler.querySelector('ion-icon')?.setAttribute('name', 'arrow-down-outline');
  //   }
  //   }

  handleServiceAction(service: Service) {
    service.action();
  }
  handleServiceFavorisAction(servicesFavori: ServiceFavoris) {
    servicesFavori.action();
  }

  // Méthode pour naviguer vers la page de paiement
  goToMacarte() {
    this.router.navigate(['/scanner'], { queryParams: { segment: 'ma-carte-qr' } });
  }
      
  goToQrMarchand() {
    this.router.navigate(['/scanner']);
  }
  // Méthode pour naviguer vers la page de paiement
  goToPaiement() {
    this.router.navigate(['/paiement']);
  }

  // Méthode pour naviguer vers la page de historique
  goToHistorique() {
    this.router.navigate(['/historique']);
  }
  goToRetraits() {
    this.router.navigate(['/retraits']);
  }
  
  toggleSalaire() {
    const salaireElement = document.querySelector('.salaire');
    if (salaireElement) {
      // Vérifie si l'élément a déjà la classe 'show'
      if (salaireElement.classList.contains('hide')) {
        // Supprime la classe 'show' si elle est présente
        salaireElement.classList.remove('hide');
      } else {
        // Ajoute la classe 'show' si elle n'est pas présente
        salaireElement.classList.add('hide');
      }
    }
  }


}
