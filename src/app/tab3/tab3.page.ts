import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3', // Selector del componente, usado en el HTML
  templateUrl: 'tab3.page.html', // Ruta al archivo HTML asociado
  styleUrls: ['tab3.page.scss'], // Ruta al archivo SCSS asociado
  standalone: false, // Indica que este componente no es independiente
})
export class Tab3Page {
  // Arreglo de tarjetas con información de contactos
  cards = [
    {
      name: 'María López', // Nombre del contacto
      role: 'Desarrolladora Frontend', // Rol del contacto
      email: 'maria.lopez@email.com', // Correo electrónico
      phone: '+34 600 123 456', // Número de teléfono
      company: 'Tech Solutions', // Empresa del contacto
      location: 'Madrid, España', // Ubicación del contacto
      image: 'https://randomuser.me/api/portraits/women/44.jpg' // URL de la imagen del contacto
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

  // Propiedad para almacenar la tarjeta seleccionada
  selectedCard: any = null;

  // Método para ver más detalles de una tarjeta
  verMas(card: any) {
    this.selectedCard = card; // Asigna la tarjeta seleccionada a la propiedad `selectedCard`
  }

  // Método para cerrar el detalle de la tarjeta
  cerrarDetalle() {
    this.selectedCard = null; // Limpia la propiedad `selectedCard`
  }
}