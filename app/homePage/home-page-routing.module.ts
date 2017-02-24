import {NgModule} from '@angular/core'

import {RouterModule, Routes} from '@angular/router';

import { HomePageComponent } from './homePage.component';

const homepageRoutes : Routes = [
    {
        path : 'home',
        component : HomePageComponent
    }
]

@NgModule({
    imports : [
        RouterModule.forChild(homepageRoutes)
    ]
})
export class homePageRoutigModule{}