import { Routes } from '@angular/router';
import { HomePageComponent } from "./home-page/home-page.component";
import { MatchesComponent } from "./matches/matches.component";
import { LogInComponent } from "./log-in/log-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { ProfileComponent } from "./profile/profile.component";
import { ModifyProfilePopupComponent } from './modify-profile-popup/modify-profile-popup.component';
export const routes: Routes = [
  {
    path: 'matches',
    component: MatchesComponent
  }
  ,
  {
    path: 'log-in',
    component: LogInComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
  path: 'pop-up',
  component: ModifyProfilePopupComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
