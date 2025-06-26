import { Component } from '@angular/core';

// Define la interfaz fuera del decorador y la clase
interface Contacto {
  nombre: string;
  apellido: string;
  role: string;
  correo: string;
  telefono: string;
  company: string;
  location: string;
  foto?: string; // La foto puede ser opcional
}

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: false,
})
export class Tab3Page {
  // Arreglo de tarjetas con información de contactos predefinidos
  cards = [
    {
      name: 'María López',
      surnames: 'Gómez',
      role: 'Desarrolladora Frontend',
      email: 'maria.lopez@email.com',
      phone: '+34 600 123 456',
      company: 'Tech Solutions',
      location: 'Madrid, España',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    {
      name: 'Carlos Pérez',
      surnames: 'Martínez',
      role: 'Project Manager',
      email: 'carlos.perez@email.com',
      phone: '+34 600 654 321',
      company: 'Innovatech',
      location: 'Barcelona, España',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
  ];

  contactos: any[] = []; // Contactos recuperados de localStorage

  constructor() {
    // Recupera los contactos almacenados en localStorage al iniciar el componente
    const guardados = localStorage.getItem('contactos');
    if (guardados) {
      try {
        const contactosParseados: Contacto[] = JSON.parse(guardados); // Declara el tipo de los datos parseados
        this.contactos = contactosParseados.map((contacto: Contacto) => ({
          name: contacto.nombre,
          surnames: contacto.apellido, // Combina nombre y apellido
          role: contacto.role,
          email: contacto.correo,
          phone: contacto.telefono,
          company: contacto.company,
          location: contacto.location,
          image: contacto.foto || 'assets/default-avatar.png', // Usa una imagen predeterminada si no hay foto
        }));
      } catch (error) {
        console.error('Error al parsear los contactos desde localStorage:', error);
        this.contactos = [];
      }
    }

    // Combina los contactos predefinidos con los recuperados
    this.cards = [...this.cards, ...(this.contactos || [])];
  }

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
  refrescarPagina() {
    location.reload(); // Recarga la página actual
  }

}