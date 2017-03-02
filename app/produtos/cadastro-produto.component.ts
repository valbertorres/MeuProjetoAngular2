import {Component} from '@angular/core';

import { ListaProdutoComponent } from './lista-produto.component';

import { Produto } from './produtos.model';

@Component({
    moduleId : module.id,
    selector : 'cadastro-produto',
    templateUrl : 'cadastro-produto.component.html'
})
export class CadastroProdutoComponent{

    private listaProdutoComponente : ListaProdutoComponent;
    lista : Produto;



    ngOnInit():void{
        
    }

    public set Produto(produto : Produto[]){
         let listaProduto : Produto[] = produto;
    }

}