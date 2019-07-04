import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { ContatoEditComponent } from './contato-edit/contato-edit.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
