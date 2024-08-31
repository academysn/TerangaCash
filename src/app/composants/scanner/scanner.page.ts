import { IonicModule } from '@ionic/angular';
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
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonCard, IonGrid, IonRow, IonCol, IonList,
    IonItem, IonSelect, IonSelectOption,IonModal, IonDatetime,
    IonDatetimeButton, IonItemDivider,IonNote, IonFooter,
    IonIcon, IonLabel, IonTitle, IonButtons, IonButton,
    CommonModule, FormsModule, IonSearchbar,IonCardContent,
    IonHeader, IonToolbar, IonSegment ,IonSegmentButton,IonImg,IonInput
  ]
})
export class ScannerPage implements OnInit {

  selectedSegment: string = 'qr-scanner';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ) {
    addIcons({ 
      swapVerticalOutline, eyeOffOutline, caretDownOutline,
      timeOutline,caretForwardOutline,qrCodeOutline,arrowForwardOutline,
      receiptOutline,walletOutline,cardOutline,chevronBackOutline
    });
  }

    // Méthode pour naviguer vers la page precedente
    goBack() {
      this.router.navigate(['../tabs/home']);
    }

    ngOnInit() {
      this.route.queryParams.subscribe(params => {
        this.selectedSegment = params['segment'] || 'qr-scanner';
      });
    }

    // Méthode pour naviguer vers la page de paiement
    goToQrScanner() {
      this.selectedSegment = 'qr-scanner';
    }

    ShowHide() {
      const codeElement = document.querySelector('.code');
      const scanElement = document.querySelector('.scan');
    
      if (codeElement && scanElement) {
        // Vérifie si l'élément a déjà la classe 'hide'
        if (codeElement.classList.contains('hide')) {
          // Supprime la classe 'hide' pour montrer l'élément
          codeElement.classList.remove('hide');
          // Ajoute la classe 'hide' pour masquer l'autre élément
          scanElement.classList.add('hide');
        } else {
          // Ajoute la classe 'hide' pour masquer l'élément
          codeElement.classList.add('hide');
          // Supprime la classe 'hide' pour montrer l'autre élément
          scanElement.classList.remove('hide');
        }
      }
    }
}
