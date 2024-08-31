import { FormsModule } from '@angular/forms';
import { Component, CUSTOM_ELEMENTS_SCHEMA, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
// import { ModalController } from '@ionic/angular';

import {
  IonContent, IonCard, IonCardContent, IonGrid, IonRow, IonCol,
  IonIcon, IonLabel, IonTitle, IonButtons, IonButton, IonModal } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';

import { addIcons } from 'ionicons';
import {chevronBackOutline,swapVerticalOutline, eyeOffOutline,
  caretDownOutline,timeOutline,caretForwardOutline,qrCodeOutline,
  arrowForwardOutline,receiptOutline,walletOutline,cardOutline,
  planetOutline,phonePortraitOutline,cashOutline,giftOutline} from 'ionicons/icons';

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
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonCard, IonCardContent,IonGrid, IonRow, IonCol,
    IonIcon, IonLabel, IonTitle, IonButtons, IonButton, IonModal,
    ExploreContainerComponent,CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class HomePage implements OnInit  {
  
  handleRefresh(event: { target: { complete: () => void; }; }) {
    setTimeout(() => {
      // Any calls to load data go here
      event.target.complete();
    }, 2000);
  }
  public environmentInjector = inject(EnvironmentInjector);

  public services: Service[] = [];
  public servicesFavoris: ServiceFavoris[] = [];

  constructor(
    private router: Router,
    private serviceService: ServiceService
    // private modalController: ModalController
  ) {
      addIcons({ 
        chevronBackOutline,swapVerticalOutline, eyeOffOutline, caretDownOutline,
        timeOutline,caretForwardOutline,qrCodeOutline,arrowForwardOutline,
        receiptOutline,walletOutline,cardOutline,planetOutline,
        phonePortraitOutline,cashOutline,giftOutline
      });
    }

  ngOnInit() {
    this.services = this.serviceService.getServices();
    this.servicesFavoris = this.serviceService.getServicesFavoris();
  }

  handleServiceAction(service: Service) {
    service.action();
  }
  handleServiceFavorisAction(servicesFavori: ServiceFavoris) {
    servicesFavori.action();
  }

  goToHistorique() {
    this.router.navigate(['/historique']);
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

  // closeModal() {
  //   this.modalController.dismiss();
  // }

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

}