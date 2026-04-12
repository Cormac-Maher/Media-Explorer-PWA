import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonApp, IonRouterOutlet, IonItem, IonList, IonContent, IonTitle, IonToolbar, IonHeader, IonMenu } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [RouterModule, IonApp, IonRouterOutlet, IonItem, IonList, IonContent, IonTitle, IonToolbar, IonHeader, IonMenu],
})
export class AppComponent {
  constructor() {}
}
