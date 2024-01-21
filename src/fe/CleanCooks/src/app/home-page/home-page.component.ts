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
  constructor(private httpClient: HttpClient) {

    this.getUsers(); // call getUsers method in the constructor
  }
  async getUsers() {
    try {
      this.httpClient.get<User[]>('http://localhost:7878/users').subscribe((users) => {
        this.users = users;
        this.currUser = this.users[0];
      });
    } catch (error) {
      console.error(error);
    }
  }
}
