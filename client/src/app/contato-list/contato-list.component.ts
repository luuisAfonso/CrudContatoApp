import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../shared/contato/contato.service';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.css']
})
export class ContatoListComponent implements OnInit {
  contatos: Array<any>;

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.contatoService.getAll().subscribe(data => {
      this.contatos = data;
      console.log(this.contatos);
    });
  }
}