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
  selector: 'app-retraits',
  templateUrl: './retraits.page.html',
  styleUrls: ['./retraits.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonCard, IonGrid, IonRow, IonCol, IonList,
    IonItem, IonSelect, IonSelectOption,IonModal, IonDatetime,
    IonDatetimeButton, IonItemDivider,IonNote, IonFooter,
    IonIcon, IonLabel, IonTitle, IonButtons, IonButton,
    CommonModule, FormsModule, IonSearchbar,IonCardContent,
    IonHeader, IonToolbar, IonSegment ,IonSegmentButton,IonImg,IonInput
  ]})
export class RetraitsPage implements OnInit {

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
  }

}

