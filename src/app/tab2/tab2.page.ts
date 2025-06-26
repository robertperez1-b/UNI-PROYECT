import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false,
})
export class Tab2Page {
  // Lista de contactos almacenados
  contactos: any[] = [];

// Lista de países para el selector
paises: string[] = [
  'Argentina',
  'Bolivia',
  'Brasil',
  'Chile',
  'Colombia',
  'Costa Rica',
  'Cuba',
  'Ecuador',
  'El Salvador',
  'España',
  'Guatemala',
  'Honduras',
  'México',
  'Panamá',
  'Paraguay',
  'Perú',
  'Uruguay',
  'Venezuela',
];

  // Objeto para almacenar los datos del nuevo contacto
  nuevoContacto = {
    nombre: '',
    apellido: '',
    telefono: '',
    correo: '',
    role: '',
    location: '',
    company: '',
  };


  // Propiedad para almacenar la foto seleccionada
  foto: string | null = null;

  constructor() {
    // Recupera los contactos almacenados en localStorage al iniciar el componente
    const guardados = localStorage.getItem('contactos');
    console.log('Contenido de localStorage (contactos):', guardados);
    if (guardados) {
      this.contactos = JSON.parse(guardados);
    }
  }

  /**
   * Guarda la lista de contactos en localStorage.
   */
  guardarEnLocalStorage() {
    localStorage.setItem('contactos', JSON.stringify(this.contactos));
  }

  /**
   * Agrega un nuevo contacto a la lista de contactos.
   * Valida que los campos obligatorios estén completos antes de agregar.
   */
  agregarContacto() {
    if (!this.nuevoContacto.nombre || !this.nuevoContacto.telefono) {
      console.error('Los campos "Nombre" y "Teléfono" son obligatorios.');
      return;
    }

    const contactoConId = {
      ...this.nuevoContacto,
      foto: this.foto, // Asocia la foto actual al contacto
      id: Date.now(), // Genera un ID único basado en la marca de tiempo
    };

    this.contactos.push(contactoConId); // Agrega el contacto a la lista
    this.guardarEnLocalStorage(); // Actualiza localStorage

    // Limpia el formulario y la foto después de agregar el contacto
    this.nuevoContacto = { nombre: '', apellido: '', telefono: '', correo: '' , role: '', location: '', company: '' };
    this.foto = null;
  }

  /**
   * Elimina un contacto de la lista por su ID.
   * @param id - ID del contacto a eliminar
   */
  eliminarContacto(id: number) {
    this.contactos = this.contactos.filter(c => c.id !== id); // Filtra los contactos
    this.guardarEnLocalStorage(); // Actualiza localStorage
  }

  /**
   * Carga una foto desde el input de archivo y la convierte a base64.
   * @param event - Evento del input de archivo
   */
  cargarFoto(event: any) {
    const archivo = event.target.files[0];
    if (!archivo) {
      console.error('No se seleccionó ningún archivo.');
      return;
    }

    const lector = new FileReader();
    lector.onload = () => {
      this.foto = lector.result as string; // Actualiza la propiedad foto con el contenido de la imagen
      console.log('Foto cargada correctamente:', this.foto);
    };
    lector.onerror = () => {
      console.error('Error al cargar la foto.');
    };
    lector.readAsDataURL(archivo); // Convierte la imagen a base64
  }
}