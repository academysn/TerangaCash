import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component, Input, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonContent, IonCard, IonGrid, IonRow, IonCol,
  IonIcon, IonLabel, IonTitle, IonButtons, IonButton, IonicSlides,
IonSegment, IonSegmentButton,IonList, IonItem, IonThumbnail, } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';

import { addIcons } from 'ionicons';
import {
  swapVerticalOutline, eyeOffOutline, caretDownOutline,
  timeOutline,caretForwardOutline,qrCodeOutline,arrowForwardOutline,
  receiptOutline,walletOutline,cardOutline} from 'ionicons/icons';

// import { SwiperModule, SwiperComponent } from 'swiper/angular';
// import { Autoplay, Loop } from 'swiper';

@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.page.html',
  styleUrls: ['./boutique.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonCard, IonGrid, IonRow, IonCol,
    IonIcon, IonLabel, IonTitle, IonButtons, IonButton,
    CommonModule, FormsModule,
    IonSegment, IonSegmentButton,
    IonList, IonItem, IonThumbnail,
    ExploreContainerComponent
  ],
})
export class BoutiquePage implements OnInit {

  swiperModules = [IonicSlides]; //Autoplay, Loop
  @Input() bannerImages: string[] = [
    'assets/imgs/1.jpg',
    'assets/imgs/2.jpg',
    'assets/imgs/3.jpg',
    'assets/imgs/4.jpg',
  ];

  selectedCategory: string = 'Tout';

  constructor() {
    addIcons({ 
      swapVerticalOutline, eyeOffOutline, caretDownOutline,
      timeOutline,caretForwardOutline,qrCodeOutline,arrowForwardOutline,
      receiptOutline,walletOutline,cardOutline 
    });
   }

  images = [
    'assets/imgs/1.jpg',
    'assets/imgs/2.jpg',
    'assets/imgs/3.jpg',
    'assets/imgs/4.jpg',
  ];

  

  ngOnInit() {
  }

}
