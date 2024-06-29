import { Routes } from '@angular/router';
import { ClientesFormComponent } from './templates/clientes/clientes-form/clientes-form.component';
import { HomeComponent } from './templates/home/home.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'home', component: HomeComponent },
  { path: 'clientes-form', component: ClientesFormComponent },
  { path: '**', component: HomeComponent }, 
];
