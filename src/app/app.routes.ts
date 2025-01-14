import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [
    {
        path: '',
        component: AppComponent // Componente principal de la página
    },
    {
        path: '**',
        redirectTo: ''
      }

];
