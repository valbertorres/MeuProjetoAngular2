"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var produto_service_1 = require("./produto.service");
var ListaProdutoComponent = (function () {
    function ListaProdutoComponent(produtoService) {
        this.produtoService = produtoService;
        this.produtos = [];
    }
    ListaProdutoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.produtoService.getFidAll()
            .then(function (produtos) {
            _this.produtos = produtos;
        }).catch(function (err) { return console.log(err); });
    };
    return ListaProdutoComponent;
}());
ListaProdutoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'lista-produto',
        templateUrl: 'lista-produto.component.html'
    }),
    __metadata("design:paramtypes", [produto_service_1.ProdutoService])
], ListaProdutoComponent);
exports.ListaProdutoComponent = ListaProdutoComponent;
//# sourceMappingURL=lista-produto.component.js.map