import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'

import {HomePageComponent} from './homePage.component';
import {ProdutoComponent} from './../produtos/produto.component';
import {CadastroProdutoComponent} from './../produtos/cadastro-produto.component';
import {ListaProdutoComponent} from './../produtos/lista-produto.component'

import {homePageRoutigModule} from './home-page-routing.module';

@NgModule({
imports: [
    CommonModule,
    homePageRoutigModule
    ],
    declarations : [
        CadastroProdutoComponent,
        HomePageComponent,
        ProdutoComponent,
        ListaProdutoComponent
        
    ],
    exports : [
        CadastroProdutoComponent,
        HomePageComponent,
        ProdutoComponent,
        ListaProdutoComponent
    ]
})
export class HomePageModule{}