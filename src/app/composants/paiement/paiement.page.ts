
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonContent, IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonList ,
  IonItem, IonSelect, IonSelectOption, IonModal, IonDatetime, IonDatetimeButton,
  IonItemDivider, IonNote, IonFooter, IonIcon, IonLabel, IonTitle, IonButtons,
  IonButton, IonSearchbar,
  IonHeader, IonToolbar, IonSegment ,IonSegmentButton,
 } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  swapVerticalOutline, eyeOffOutline, caretDownOutline,
  timeOutline,caretForwardOutline,qrCodeOutline,arrowForwardOutline,
  receiptOutline,walletOutline,cardOutline,chevronBackOutline,cartOutline} from 'ionicons/icons';
  import { FactureService } from '../../services/facture.service';
  // Définir l'interface Facture
  interface Facture {
    id: number;
    image: string;
    name: string;
  }

@Component({
  selector: 'app-paiement',
  templateUrl: './paiement.page.html',
  styleUrls: ['./paiement.page.scss'],
  standalone: true,
  imports: [
    IonContent, IonCard, IonCardContent, IonGrid, IonRow, IonCol, IonList,
    IonItem, IonSelect, IonSelectOption,IonModal, IonDatetime,
    IonDatetimeButton, IonItemDivider,IonNote, IonFooter,
    IonIcon, IonLabel, IonTitle, IonButtons, IonButton, IonSegment ,IonSegmentButton,
    CommonModule, FormsModule, IonSearchbar, IonHeader, IonToolbar,
  ]})


export class PaiementPage implements OnInit {

  factures: Facture[] = []; // Déclarer le type explicitement

  public environmentInjector = inject(EnvironmentInjector);

  constructor(
    private factureService: FactureService,
    private router: Router,
  ) {
    addIcons({ 
      swapVerticalOutline, eyeOffOutline, caretDownOutline,
      timeOutline,caretForwardOutline,qrCodeOutline,arrowForwardOutline,
      receiptOutline,walletOutline,cardOutline,chevronBackOutline,cartOutline
    });
   }

  selectedSegment: string = 'factures';

  /*factures  = [
    {id: 1, image: 'assets/images/woyofal.png', name: 'Woyofal' },
    {id: 2, image: 'assets/images/senelec.png', name: 'Senelec' },
    {id: 3, image: 'assets/images/seneau.png', name: 'SEN\'EAU' },
    {id: 4, image: 'assets/images/canalplus.png', name: 'Canal +' },
    {id: 5, image: 'assets/images/sonatel.png', name: 'Sonatel fixe' },
    {id: 6, image: 'assets/images/teranga.png', name: 'Offres Teranga' },
    {id: 7, image: 'assets/images/rapido.png', name: 'Rapido' },
    {id: 8, image: 'assets/images/xewel.png', name: 'Xewel' },
    {id: 9, image: 'assets/images/ubipharm.png', name: 'Ubipharm' },
    {id: 10, image: 'assets/images/sunnamoon.png', name: 'Sunna Moon' },
    {id: 11, image: 'assets/images/total.png', name: 'TotalEnergies' },
    {id: 12, image: 'assets/images/ilemel.png', name: 'ILEMEL' },
    {id: 13, image: 'assets/images/maersk.png', name: 'MAERSK' },
    {id: 14, image: 'assets/images/flexeau.png', name: 'Flexeau' },
    {id: 15, image: 'assets/images/ism.png', name: 'ISM' },
    {id: 16, image: 'assets/images/samambey.png', name: 'Sama Mbey' },
    {id: 17, image: 'assets/images/aquatech.png', name: 'Aquatech' },
  ];*/

  marchands = [
    { nom: 'Amana travel', category: 'transport' },
    { nom: 'Bolore transport', category: 'transport' },
    { nom: 'Car rapide prestige', category: 'transport' },
    { nom: 'Eva voyage', category: 'transport' },
    { nom: 'General trading', category: 'commerce' },
  ];

  // categories = [
  //   {category: 'transport' },
  //   {category: 'commerce' },
  //   {category: 'education' },
  //   {category: 'sante' },
  //   {category: 'restauration' },
  // ];

  // filteredMarchands = [...this.marchands];

  // filterItems() {
  //   this.filteredMarchands = this.marchands.filter(marchand => {
  //     return (
  //       (this.selectedCategory === 'all' || marchand.category === this.selectedCategory) &&
  //       marchand.nom.toLowerCase().includes(this.searchTerm.toLowerCase())
  //     );
  //   });
  // }

  // Méthode pour naviguer vers la page precedente

  categories: string[] = []; // Explicitly type categories as string[]
  selectedCategory: string = 'all';
  filteredMarchands = this.marchands;
  searchTerm: string = '';

  // filterMarchands() {
  //   if (this.selectedCategory === 'all') {
  //     this.filteredMarchands = this.marchands;
  //   } else {
  //     this.filteredMarchands = this.marchands.filter(m => m.category === this.selectedCategory);
  //   }
  // }

  filterItems() {
    // Filter by category
    let results = this.marchands;
    if (this.selectedCategory !== 'all') {
      results = results.filter(m => m.category === this.selectedCategory);
    }
    // Further filter by search term
    if (this.searchTerm) {
      results = results.filter(m => m.nom.toLowerCase().includes(this.searchTerm.toLowerCase()));
    }
    this.filteredMarchands = results;

  }

  goBack() {
    this.router.navigate(['../tabs/home']);
  }

  ngOnInit() {
    this.factures = this.factureService.getFactures();
    this.categories = Array.from(new Set(this.marchands.map(m => m.category)));
    this.filterItems(); // Initial filter
  }

}
