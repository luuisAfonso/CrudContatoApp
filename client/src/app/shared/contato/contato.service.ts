import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  public API = '//localhost:8080';
  public CONTATO_API = this.API + '/contatos';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get(this.API + '/contatos-list');
  }

  get(id: string) {
    return this.http.get(this.CONTATO_API + '/' + id);
  }

  save(contato: any): Observable<any> {
    let result: Observable<Object>;
    if (contato['href']) {
      result = this.http.put(contato.href, contato);
    } else {
      console.log(contato);
      result = this.http.post(this.CONTATO_API, contato);
    }
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
