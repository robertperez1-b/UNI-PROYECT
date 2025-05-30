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
    name: 'María López',
    role: 'Desarrolladora Frontend',
    email: 'maria.lopez@email.com',
    phone: '+34 600 123 456',
    company: 'Tech Solutions',
    location: 'Madrid, España',
    image: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    name: 'Carlos Pérez',
    role: 'Project Manager',
    email: 'carlos.perez@email.com',
    phone: '+34 600 654 321',
    company: 'Innovatech',
    location: 'Barcelona, España',
    image: 'https://randomuser.me/api/portraits/men/32.jpg'
  }
  
];
selectedCard: any = null;

  verMas(card: any) {
    this.selectedCard = card;
  }

  cerrarDetalle() {
    this.selectedCard = null;
  }

}