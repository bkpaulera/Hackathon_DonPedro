import { ControlerService } from './../services/controler.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {

  step:number;

  pessoas:any[] = [];
  //name:String = 'name';

  constructor(private _controlerService: ControlerService) {

  }

  ngOnInit() {
    this.step=-1;
    this.pessoas = this._controlerService.getUser();
  }

  nextStep(next:number){
    this.step = next;
  }

}
