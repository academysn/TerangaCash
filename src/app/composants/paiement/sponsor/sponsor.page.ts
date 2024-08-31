import { FactureService } from '../../../services/facture.service'; // Import du service
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonContent, IonCard, IonGrid, IonRow, IonCol, IonList , IonItem,
  IonSelect, IonSelectOption, IonModal, IonDatetime, IonDatetimeButton,
  IonItemDivider, IonNote, IonFooter,IonIcon, IonLabel, IonTitle, IonButtons,
  IonButton,IonSearchbar, IonCardContent,
  IonHeader, IonToolbar, IonSegment ,IonSegmentButton,IonImg,IonInput
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  swapVerticalOutline, eyeOffOutline, caretDownOutline,
  timeOutline,caretForwardOutline,qrCodeOutline,arrowForwardOutline,
  receiptOutline,walletOutline,cardOutline,chevronBackOutline} from 'ionicons/icons';

@Component({
  selector: 'app-sponsor',
  templateUrl: './sponsor.page.html',
  styleUrls: ['./sponsor.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonCard, IonGrid, IonRow, IonCol, IonList,
    IonItem, IonSelect, IonSelectOption,IonModal, IonDatetime,
    IonDatetimeButton, IonItemDivider,IonNote, IonFooter,
    IonIcon, IonLabel, IonTitle, IonButtons, IonButton,
    CommonModule, FormsModule, IonSearchbar,IonCardContent,
    IonHeader, IonToolbar, IonSegment ,IonSegmentButton,IonImg,IonInput
  ]})
export class SponsorPage implements OnInit {

  selectedFacture: any;

  constructor(
    private factureService: FactureService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
      addIcons({ 
        swapVerticalOutline, eyeOffOutline, caretDownOutline,
        timeOutline,caretForwardOutline,qrCodeOutline,arrowForwardOutline,
        receiptOutline,walletOutline,cardOutline,chevronBackOutline
      });
   }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id'); // Obtenir le paramètre 'id'
      if (idParam !== null) { // Vérifier si 'idParam' n'est pas null
        const id = +idParam; // Convertir en nombre
        if (!isNaN(id)) { // Vérifier si 'id' est un nombre valide
          this.selectedFacture = this.factureService.getFactureById(id);
        }
      }
    });
  }
    // Méthode pour naviguer vers la page precedente
    goBack() {
      this.router.navigate(['../paiement']);
    }

}
