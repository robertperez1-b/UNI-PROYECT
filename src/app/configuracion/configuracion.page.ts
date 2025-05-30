import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, 
  IonItem, IonLabel,IonImg, IonAvatar  } from "@ionic/angular/standalone";

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonContent, IonicModule, IonHeader, IonTitle, IonToolbar ]
})
export class ConfiguracionPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
