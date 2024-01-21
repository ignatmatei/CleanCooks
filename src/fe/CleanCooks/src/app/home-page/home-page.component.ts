import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {NgOptimizedImage} from "@angular/common";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatCardModule,
    NgOptimizedImage,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  users: User[] = [];
   currUser: User = new User(0, '', '', '');
   reccomendedUser: User = new User(0, '', '', '');
  constructor(private httpClient: HttpClient) {
    this.getCurrUser(); // call getCurrUser method in the constructor
  }
  async getCurrUser() {
    try {
      this.httpClient.get<User>('http://localhost:7878/users/username/admin').subscribe((user) => {
        this.currUser = user;
      });
    } catch (error) {
      console.error(error);
    }
  }
  async getRandomUser() {
    try {
      this.httpClient.get<User>('http://localhost:7878/users/random').subscribe((user) => {
        this.currUser = user;
      });
    } catch (error) {
      console.error(error);
    }
  }
  like() : void {
    window.alert("You liked " + this.currUser.username);
  }
}
