import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import {HomePageComponent} from './homePage.component';
import {homePageRoutigModule} from './home-page-routing.module';

@NgModule({
imports: [
    CommonModule,
    homePageRoutigModule
    ],
    declarations : [
        HomePageComponent
    ],
    exports : [
        HomePageComponent
    ]
})
export class HomePageModule{}