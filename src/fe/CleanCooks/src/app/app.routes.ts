import { Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {MatchesComponent} from "./matches/matches.component";
export const routes: Routes = [
  {
    path: 'matches',
    component: MatchesComponent
  }
  ,
  {
    path: '',
    component: HomePageComponent
  }
];
