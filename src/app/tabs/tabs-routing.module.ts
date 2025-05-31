import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

// Definición de las rutas para el módulo de las pestañas
const routes: Routes = [
  {
    path: 'tabs', // Ruta principal para las pestañas
    component: TabsPage, // Componente base para las pestañas
    children: [
      {
        path: 'tab1', // Ruta para la pestaña 1
        loadChildren: () => import('../tab1/tab1.module').then(m => m.Tab1PageModule) 
        // Carga diferida del módulo de la pestaña 1
      },
      {
        path: 'tab2', // Ruta para la pestaña 2
        loadChildren: () => import('../tab2/tab2.module').then(m => m.Tab2PageModule) 
        // Carga diferida del módulo de la pestaña 2
      },
      {
        path: 'tab3', // Ruta para la pestaña 3
        loadChildren: () => import('../tab3/tab3.module').then(m => m.Tab3PageModule) 
        // Carga diferida del módulo de la pestaña 3
      },
      {
        path: 'configuracion', // Ruta para la página de configuración
        loadChildren: () => import('../configuracion/configuracion.module').then(m => m.ConfiguracionPageModule) 
        // Carga diferida del módulo de configuración
      },
      {
        path: '', // Ruta vacía dentro de las pestañas
        redirectTo: '/tabs/tab1', // Redirección a la pestaña 1 por defecto
        pathMatch: 'full' // Coincidencia completa de la ruta
      }
    ]
  },
  {
    path: '', // Ruta raíz de la aplicación
    redirectTo: '/tabs/tab1', // Redirección a la pestaña 1 por defecto
    pathMatch: 'full' // Coincidencia completa de la ruta
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Importación de las rutas definidas
})
export class TabsPageRoutingModule {}