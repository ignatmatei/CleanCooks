import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatBadgeModule} from "@angular/material/badge";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {ModifyProfilePopupComponent} from "../modify-profile-popup/modify-profile-popup.component";
import { currUser } from '../currUser';
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatCardModule,
    NgOptimizedImage,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatBadgeModule,
    RouterLink,
    RouterLinkActive,
    ModifyProfilePopupComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  currUser : User = new User(0, '', '', '', [], '');
   reccomendedUser: User = new User(0, '', '', '', [], '');
  constructor(private httpClient: HttpClient) {
    this.getCurrUser(); // call getCurrUser method in the constructor
    this.getRandomUser(); // call getRandomUser method in the constructor
  }
  async getCurrUser() {
    try {
      this.httpClient.get<User>
      ('https://ccooks.azurewebsites.net/api/users/username/' + currUser.getInstance().username).subscribe((user) => {
        this.currUser = user;
        console.log(this.currUser.description);
      });
    } catch (error) {
      console.error(error);
    }
  }
  async getRandomUser() {
    try {
      this.httpClient.get<User>('https://ccooks.azurewebsites.net/api/users/recommend/' + currUser.getInstance().username).subscribe((user) => {
        this.reccomendedUser = user;
      });
    } catch (error) {
      console.error(error);
    }
  }
  async like() {
    this.httpClient.put
    ('https://ccooks.azurewebsites.net/api/users/like/' + this.currUser.uid + '/' + this.reccomendedUser.uid, null)
      .subscribe();
  }
  displayPopup() {
    if (this.currUser.description === '') {
      alert('You must complete your profile before you can like other users!');
    }
  }
}
