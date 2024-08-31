import { FormsModule } from '@angular/forms';
import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonContent, IonCard, IonGrid, IonRow, IonCol,
  IonIcon, IonLabel, IonTitle, IonButtons, IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../../explore-container/explore-container.component';

import { addIcons } from 'ionicons';
import {
  swapVerticalOutline, eyeOffOutline, caretDownOutline,
  timeOutline,caretForwardOutline,qrCodeOutline,arrowForwardOutline,
  receiptOutline,walletOutline,cardOutline} from 'ionicons/icons';

@Component({
  selector: 'app-ligne',
  templateUrl: './ligne.page.html',
  styleUrls: ['./ligne.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonCard, IonGrid, IonRow, IonCol,
    IonIcon, IonLabel, IonTitle, IonButtons, IonButton,
    ExploreContainerComponent
  ]
})
export class LignePage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(
    private router: Router,
  ) {
    addIcons({ 
      swapVerticalOutline, eyeOffOutline, caretDownOutline,
      timeOutline,caretForwardOutline,qrCodeOutline,arrowForwardOutline,
      receiptOutline,walletOutline,cardOutline 
    });
  }
  ngOnInit() {
  }

}
