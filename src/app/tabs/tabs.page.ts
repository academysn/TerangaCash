import { Component, EnvironmentInjector, inject , CUSTOM_ELEMENTS_SCHEMA, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonButtons, IonButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { AnimationController} from '@ionic/angular'
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  arrowForwardOutline,
  locateOutline,
  locationOutline,
  notificationsOutline,
  optionsOutline,
  homeOutline,
  cashOutline,
  documentOutline,
  cartOutline,
  qrCodeOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonButtons, IonButton ,IonIcon, IonLabel, RouterLink,],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TabsPage implements OnInit, AfterViewInit {
  public environmentInjector = inject(EnvironmentInjector);

  @ViewChild('tabs') tabs!: IonTabs;
  selectedTab: string = 'tab1'; // Onglet par défaut

  constructor(private animationCtrl: AnimationController) {
    addIcons({
      locateOutline,
      notificationsOutline,
      optionsOutline,
      locationOutline,
      arrowForwardOutline,
      homeOutline,
      cashOutline,
      documentOutline,
      cartOutline,
      qrCodeOutline,
    });  
  }


  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.updateSelectedTab(); // Met à jour l'onglet sélectionné au chargement
    }, 0);
  }

  private updateSelectedTab() {
    const activeTab = this.tabs.getSelected(); // Obtient l'onglet actuellement sélectionné
    this.selectedTab = activeTab || 'tab1';    // Valeur par défaut
  }

/*  setCurrentTab(event: any) {
    this.selectedTab = event.tab;
    const tabButton = document.querySelector(`ion-tab-button[tab="${this.selectedTab}"]`);
    const fadeInAnimation = this.createFadeInAnimation(tabButton as HTMLElement);
    fadeInAnimation.keyframes([
      { offset: 0, transform: 'scale(1)' },
      { offset: 0.5, transform: 'scale(1.2)' },
      { offset: 1, transform: 'scale(1)' }
    ]);
    fadeInAnimation.play();
    console.log(this.selectedTab)
  }*/

  setCurrentTab(event: any) {
    // Retirer la classe 'selected' de l'onglet actuellement sélectionné
    const currentSelectedTabButton = document.querySelector('ion-tab-button.selected');
    if (currentSelectedTabButton) {
      currentSelectedTabButton.classList.remove('selected');
    }
    // Définir l'onglet sélectionné
    this.selectedTab = event.tab;
  
    // Sélectionner le nouvel onglet basé sur 'this.selectedTab'
    const newSelectedTabButton = document.querySelector(`ion-tab-button[tab="${this.selectedTab}"]`);
    
    // Ajouter la classe 'selected' au nouvel onglet
    if (newSelectedTabButton) {
      newSelectedTabButton.classList.add('selected');
  
      // Créer l'animation de fade-in
      const fadeInAnimation = this.createFadeInAnimation(newSelectedTabButton as HTMLElement);
      fadeInAnimation.keyframes([
        { offset: 0, transform: 'scale(1)' },
        { offset: 0.5, transform: 'scale(1.2)' },
        { offset: 1, transform: 'scale(1)' }
      ]);
      console.log(this.selectedTab)
    }
  }
  
  private createFadeInAnimation(baseEl: HTMLElement) {
    return this.animationCtrl.create()
      .addElement(baseEl)
      .duration(300)
      .easing('ease-in-out');
      // .fromTo('opacity', '0', '1');
  }
}
