import {Injectable} from '@angular/core';

import {Observable} from 'rxjs';
import {Produto} from './../produtos/produtos.model';

import 'rxjs/add/operator/toPromise';

import { Http, Headers, Response } from '@angular/http'

@Injectable()
export class ProdutoService{
    private produtoUrl : string= 'app/'

    constructor(private http : Http){}

    getfindAll() : Promise<Produto[]>{
        return this.http.get(this.produtoUrl)
        .toPromise()
        .then(response => response.json().data as Produto[])
        .catch()
    }

    private handleErr(err:any):Promise<any>{
        console.log(err);
        return Promise.reject(err.message || err);
    }

}