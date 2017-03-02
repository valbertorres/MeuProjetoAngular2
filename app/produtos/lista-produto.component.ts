import { Component, OnInit } from '@angular/core';

import { Produto } from './produtos.model';
import { ProdutoService } from './produto.service';


@Component({
    moduleId : module.id,
    selector : 'lista-produto',
    templateUrl : 'lista-produto.component.html'
})
export class ListaProdutoComponent implements OnInit{

    produtos : Produto[] = [];

    constructor(
      private  produtoService : ProdutoService  
    ){}

    ngOnInit():void{
        this.produtoService.getFidAll()
        .then((produtos : Produto[]) =>{
            this.produtos = produtos;
        } ).catch(err => console.log(err));
    }


}