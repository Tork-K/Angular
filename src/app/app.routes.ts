import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./componets/home/home.component";
import { AboutComponent } from "./componets/about/about.component";
import { HeroesComponent } from "./componets/heroes/heroes.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent},
    { path: 'about', component: AboutComponent},
    { path: 'heroes', component: HeroesComponent},
    { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);