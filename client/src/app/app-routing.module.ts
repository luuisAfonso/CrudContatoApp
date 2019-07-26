import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { ContatoEditComponent } from './contato-edit/contato-edit.component';
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: '', redirectTo:'/contato-list', pathMatch:'full'
  },
  {
    path: 'contato-list', component: ContatoListComponent
  },
  {
    path: 'contato-add', component: ContatoEditComponent
  },
  {
    path: 'contato-edit/:id', component: ContatoEditComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path:'**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
