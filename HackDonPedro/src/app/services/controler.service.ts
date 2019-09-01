import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ControlerService {

  constructor() { }

  getUser(){
    return [
      { id: '010203', 
        name: 'Bruce Wayne',
        email:'Bruce_nao.eo@batman.com.br',
        loja: 'Starbucks',
        cpf:'123.456.789-00'
      } ];
  }
}
