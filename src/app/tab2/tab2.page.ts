import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
cards = [
    {
      title: 'Curso de Angular',
      description: 'Aprende Angular con ejemplos prácticos',
      image: 'https://angular.io/assets/images/logos/angular/angular.png'
    },
    {
      title: 'Curso de Ionic',
      description: 'Crea apps móviles con Ionic Framework',
      image: 'https://ionicframework.com/docs/icons/logo-icon.png'
    }
  ];
  verMas(card: any) {
  console.log('Card clickeada:', card);
}

  constructor() {}

}
