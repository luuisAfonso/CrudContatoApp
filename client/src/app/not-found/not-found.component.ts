import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  template: `
    <mat-card>
      <h1>
        Sorry, the page that you are looking for don't exists or your url is wrong, try something diferent or go to the 
        <a [routerLink]="homePath">main page</a> 
      </h1>
    </mat-card>
  `,
  styles: []
})
export class NotFoundComponent implements OnInit {
  homePath = '/contato-list'
  constructor() { }

  ngOnInit() {
  }

}
