import { Component, OnInit } from '@angular/core';

import { Produto } from './produtos.model';
import { ProdutoService } from './../homePage/produto.service';

@Component({
    moduleId : module.id,
    selector : 'lista-produto',
    templateUrl : 'lista-produto.component.html'
})
export class ListaProdutoComponent{

    private produtos : Produto[] = [];

    constructor( 
        private produtoService : ProdutoService
    ){}

    ngOninit():void{
        this.produtoService.getfindAll()
        .then((produtos : Produto[]) =>{
            this.produtos = produtos;
        } ).catch(err => console.log(err));
    }


}