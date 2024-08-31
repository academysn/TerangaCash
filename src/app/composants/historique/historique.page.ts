
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component, ViewEncapsulation, EnvironmentInjector, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  IonContent, IonCard, IonGrid, IonRow, IonCol, IonList , IonItem,
  IonSelect, IonSelectOption, IonModal, IonDatetime, IonDatetimeButton,
  IonItemDivider, IonNote, IonFooter,
  IonIcon, IonLabel, IonTitle, IonButtons, IonButton,IonSearchbar, IonInput } from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  swapVerticalOutline, eyeOffOutline, caretDownOutline,
  timeOutline,caretForwardOutline,qrCodeOutline,arrowForwardOutline,
  receiptOutline,walletOutline,cardOutline,chevronBackOutline} from 'ionicons/icons';

import * as moment from 'moment';
import 'moment/locale/fr';
  
export interface Transaction {
  date: string;
  type: string;
  description: string;
  detail: string;
  amount: string;
  heure: string;
  color: 'success' | 'danger';
}

@Component({
  selector: 'app-historique',
  templateUrl: './historique.page.html',
  styleUrls: ['./historique.page.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    IonContent, IonCard, IonGrid, IonRow, IonCol, IonList,
    IonItem, IonSelect, IonSelectOption,IonModal, IonDatetime,
    IonDatetimeButton, IonItemDivider,IonNote, IonFooter,
    IonIcon, IonLabel, IonTitle, IonButtons, IonButton,
    CommonModule, FormsModule, IonSearchbar,IonInput
  ]
})
export class HistoriquePage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);

  constructor(private router: Router,) {
    addIcons({ 
      swapVerticalOutline, eyeOffOutline, caretDownOutline,
      timeOutline,caretForwardOutline,qrCodeOutline,arrowForwardOutline,
      receiptOutline,walletOutline,cardOutline,chevronBackOutline
    });
    
    const dateDebut = new Date(2024, 0, 1);
    this.selectedDateDebut = dateDebut.toISOString();
    this.selectedDateFin = new Date().toISOString();
   }

  transactions: Transaction[] = [
    {
      date: '18 août 2024',
      type: 'Transfert',
      description: 'Transfert effectué',
      detail: 'Abdou Diallo',
      amount: '-2 016 CFA',
      heure: '17:42',
      color: 'danger'
    },
    {
      date: '18 août 2024',
      type: 'Recharge crédit',
      description: 'Recharge crédit effectuée',
      detail: 'Mon Num',
      amount: '-500 CFA',
      heure: '20:08',
      color: 'danger'
    },

    {
      date: '18 août 2024',
      type: 'Paiement',
      description: 'Paiement facture effectué',
      detail: 'Sonatel Fix',
      amount: '-14 900 CFA',
      heure: '17:42',
      color: 'danger'
    },

    {
      date: '18 août 2024',
      type: 'Dépôt',
      description: 'Dépôt reçu',
      detail: '788524294',
      amount: '-10 080 CFA',
      heure: '15:48',
      color: 'success'
    },

    {
      date: '17 août 2024',
      type: 'Retraits',
      description: 'Retraits effectué',
      detail: '786474635',
      amount: '-1 000 CFA',
      heure: '18:00',
      color: 'danger',
    },

    {
      date: '16 août 2024',
      type: 'Retraits',
      description: 'Retraits effectué',
      detail: '786474635',
      amount: '-1 000 CFA',
      heure: '21h 35',
      color: 'danger'
    },
    
    {
      date: '12 août 2024',
      type: 'Transfert',
      description: 'Transfert d\'argent effectué',
      detail: 'Moutagha Pa Diallo',
      amount: '-10 080 CFA',
      heure: '14h 30',
      color: 'danger'
    },
    {
      date: '12 août 2024',
      type: 'Dépôt',
      description: 'Dépôt reçu',
      detail: '786297835',
      amount: '+15 500 CFA',
      heure: '14h 30',
      color: 'success'
    },
    {
      date: '05 août 2024',
      type: 'Transfert',
      description: 'Transfert d\'argent effectué',
      detail: 'Xadim',
      amount: '-2 772 CFA',
      heure: '14h 30',
      color: 'danger'
    },
    {
      date: '01 août 2024',
      type: 'Transfert',
      description: 'Transfert d\'argent reçu',
      detail: 'Biro',
      amount: '+1 900 CFA',
      heure: '14h 30',
      color: 'success'
    },
    {
      date: '31 juillet 2024',
      type: 'Dépôt',
      description: 'Dépôt reçu',
      detail: '785491407',
      amount: '+15 000 CFA',
      heure: '14h 30',
      color: 'success'
    }
  ];

  filteredTransactions: Transaction[] = [];
  searchText: string = '';
  selectedTransactionType: string = 'Tout';
  NewdateFin = new Date();
  NewdateDebut = new Date();
  dateDebut = new Date(2000, 0, 1);
  selectedDateDebut: string = '';
  showPickerDebut = false;

  selectedDateFin: string = '';
  showPickerFin = false;

  RdateDebut: Date | null = null;
  RdateFin: Date | null = null;

  uniqueDescriptions: string[] = [];

  ngOnInit() {
    this.initializeUniqueDescriptions();
    this.filterTransactions(); // Initialise avec les transactions filtrées
  }

  initializeUniqueDescriptions() {
    const descriptions = this.transactions.map(t => t.description);
    this.uniqueDescriptions = [...new Set(descriptions)];
  }

  filterTransactions() {

    this.NewdateDebut = new Date(this.selectedDateDebut);
    this.NewdateFin = new Date(this.selectedDateFin);

    // Formatter la date en français avec le mois complet
    const formatter = new Intl.DateTimeFormat('fr-FR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    });

    const formattedDateDebut = formatter.format(this.NewdateDebut);
    const formattedDateFin = formatter.format(this.NewdateFin);
    
    // Convertir les dates de début et fin en objets Date
    const dateDebut = this.selectedDateDebut ? new Date(this.selectedDateDebut) : null;
    const dateFin = this.selectedDateFin ? new Date(this.selectedDateFin) : null;
    console.log('Date Début:', formattedDateDebut);
    console.log('Date Fin:', formattedDateFin);

    this.filteredTransactions = this.transactions.filter(transaction => {

      const transactionDateStr = (transaction.date);
      // Fonction pour convertir le mois en nombre
      function getMonthNumber(monthName: string): number {
        const months: string[] = [
          "janvier", "février", "mars", "avril", "mai", "juin",
          "juillet", "août", "septembre", "octobre", "novembre", "décembre"
        ];
        const monthIndex: number = months.indexOf(monthName.toLowerCase());
        if (monthIndex === -1) {
          throw new Error(`Mois inconnu: ${monthName}`);
        }
        return monthIndex + 1; // +1 parce que les mois en JavaScript commencent à 0
      }

      // Extraction des parties de la date
      const [dayStr, monthName, yearStr]: string[] = transactionDateStr.split(' ');

      // Conversion des chaînes en nombres
      const day: number = parseInt(dayStr, 10);
      const year: number = parseInt(yearStr, 10);
      const month: number = getMonthNumber(monthName);

      // Création de l'objet Date
      const transactionDate: Date = new Date(year, month - 1, day);
      
      console.log('Transaction Date:',transactionDate);
      const matchesSearchText = this.searchText
        ? transaction.description.toLowerCase().includes(this.searchText.toLowerCase()) ||
          transaction.detail.toLowerCase().includes(this.searchText.toLowerCase()) ||
          transaction.type.toLowerCase().includes(this.searchText.toLowerCase())
        : true;
  
      const matchesType = this.selectedTransactionType !== 'Tout'
        ? transaction.description === this.selectedTransactionType
        : true;
  
      // Vérifier si la date de la transaction est dans la plage spécifiée
      const matchesDateRange = (dateDebut && dateFin)
         ? transactionDate >= dateDebut && transactionDate <= dateFin
         : true;
  
      return matchesSearchText && matchesType && matchesDateRange;
    });
  }
  resetFilters() {
    // Réinitialiser les valeurs des filtres
    this.searchText = '';
    this.selectedTransactionType = 'Tout';
    this.selectedDateDebut = this.dateDebut.toISOString();
    this.selectedDateFin = new Date().toISOString();
    this.showPickerDebut = false;
    this.showPickerFin = false;
    // Refiltrer les transactions sans critères
    this.filterTransactions();
  }

  // Toggle the visibility of the date picker
  showDatePickerDebut() {
    this.showPickerDebut = !this.showPickerDebut;
  }

  // Handle date changes from the picker
  onDateDebutChange(event: any) {
    this.selectedDateDebut = event.detail.value;
    this.showPickerDebut = false; // Hide the date picker after selection
    this.filterTransactions()
  }

  showDatePickerFin() {
    this.showPickerFin = !this.showPickerFin;
  }

  // Handle date changes from the picker
  onDateFinChange(event: any) {
    this.selectedDateFin = event.detail.value;
    this.showPickerFin = false; // Hide the date picker after selection
    this.filterTransactions()
  }

  // Format the date for display
  formatDate(date: string): string {
    const dateObject = new Date(date);
    const formattedDate = dateObject.toLocaleDateString('us-EN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
    return formattedDate;
  }

  recherche() {
    this.filterTransactions();
  }

  goBack() {
    this.router.navigate(['../tabs/home']);
  }
}
