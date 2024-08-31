import { Component, Input } from '@angular/core';

import {EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonToolbar, IonTabButton, IonButtons, IonButton, IonTitle, IonIcon, IonLabel, IonMenuButton} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {menuOutline, searchOutline, notificationsOutline} from 'ionicons/icons';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonToolbar, IonTabButton, IonButtons, IonButton, IonTitle,  IonIcon, IonLabel, IonMenuButton],
})
export class ExploreContainerComponent {
  public environmentInjector = inject(EnvironmentInjector);
  @Input() name?: string;

  constructor() {
    addIcons({ menuOutline, searchOutline, notificationsOutline });
  }
}
