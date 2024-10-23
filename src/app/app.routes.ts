import { Routes } from '@angular/router';
import { FlexLayoutComponent } from './components/flex-layout/flex-layout.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ListComponent } from './components/list/list.component';
import { GridLayoutComponent } from './components/grid-layout/grid-layout.component';
import { HomegridComponent } from './components/homegrid/homegrid.component';

export const routes: Routes = [
    {
        path:"",
        component:FlexLayoutComponent,
        children:[
            {
                path:"",
                component:HomeComponent
            },
            {
                path:"list",
                component:ListComponent
            }
        ]
    },
    {
        path:"grid",
        component:GridLayoutComponent,
        children:[
            {
                path:"",
                component:HomegridComponent
            },
            {
                path:"list",
                component:ListComponent
            }
        ]
    }
];
