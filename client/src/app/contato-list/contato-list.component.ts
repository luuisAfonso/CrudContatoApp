import { Component, OnInit } from '@angular/core';

import { ContatoService } from '../shared/contato/contato.service';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css'],
})
export class ContatoListComponent implements OnInit {
  contatos: Array<any>;

  selectedContato: any = null;
  
  constructor(private contatoService: ContatoService) { }

  onMouseOnContato(contato: any){
    this.selectedContato = contato;
  }

  ngOnInit() {
    this.contatoService.getAll().subscribe(data => {
      this.contatos = data;
    });
  }

  

}