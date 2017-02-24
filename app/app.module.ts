import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {HomePageModule} from './homePage/homePage.module';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
    imports : [
        AppRoutingModule,
        BrowserModule,
        HomePageModule 
        ],

    declarations : [
        AppComponent
        ],
    bootstrap: [
        AppComponent
        ]
})
export class AppModule{}