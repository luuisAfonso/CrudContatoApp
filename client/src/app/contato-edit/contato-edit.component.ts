import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { Subscription } from 'rxjs';

import { ContatoService } from '../shared/contato/contato.service';


@Component({
  selector: 'app-contato-edit',
  templateUrl: './contato-edit.component.html',
  styleUrls: ['./contato-edit.component.css']
})
export class ContatoEditComponent implements OnInit, OnDestroy {

  contato: any = {};

  sub: Subscription;

  constructor(  private route: ActivatedRoute,
                private router: Router,
                private contatoService: ContatoService,
  ) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      const id = params['id'];
      if(id){
        this.contatoService.get(id).subscribe( contato =>{
          if(contato){
            this.contato = contato;
            this.contato.href = this.contato._links.self.href;
          }else{
            console.log('Contato com este id não foi encontrado, retornando a lista.');
            this.gotoList();
          }
        })
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/contato-list']);
  }

  save(form: NgForm) {
    this.contatoService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

  remove(href) {
    this.contatoService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
}