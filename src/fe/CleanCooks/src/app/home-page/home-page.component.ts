import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {User} from "../models/user";
import axios from "axios";
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    MatCardModule,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  users: User[] = [];
   currUser: User = new User(0, '', '', '');
  constructor() {
    this.getUsers(); // call getUsers method in the constructor
  }
  async getUsers() {
    try {
      const response = await axios.get<User[]>('http://localhost:7878/users');
      this.users = response.data;
      this.currUser = this.users[0];
    } catch (error) {
      console.error(error);
    }
  }
}
