import { Routes } from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {MatchesComponent} from "./matches/matches.component";
import {LogInComponent} from "./log-in/log-in.component";
export const routes: Routes = [
  {
    path: 'matches',
    component: MatchesComponent
  }
  ,
  {
    path: 'login',
    component: LogInComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  }
];
