import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';

const APP_ROUTES: Routes = [
  {path:'login', component:LoginComponent},
  {path:'cursos', component:CursosComponent},
  {path:'cursos/:id', component:CursoDetalheComponent},
  {path:'naoEncontrado', component:CursoNaoEncontradoComponent},
  {path:'', component:HomeComponent}
];

export const routing:ModuleWithProviders<RouterModule> = RouterModule.forRoot(APP_ROUTES);
