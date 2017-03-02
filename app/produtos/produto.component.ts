import {Component} from '@angular/core';

import { Location } from '@angular/common';

@Component({
    moduleId : module.id,
    selector : 'produto-Component',
    templateUrl : 'produto-component.html',
    styleUrls : [
        'produto.css'
    ]
})
export class ProdutoComponent{

constructor(
    private location : Location
){
    
}

    goBack():void{
        this.location.back();
    }
}