import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {User} from "../models/user";
import {HttpClient} from "@angular/common/http";
import {NgForOf} from "@angular/common";
@Component({
  selector: 'app-matches',
  standalone: true,
  imports: [
    MatCardModule,
    NgForOf
  ],
  templateUrl: './matches.component.html',
  styleUrl: './matches.component.scss'
})
export class MatchesComponent {
  matchedUsers: User[] = [];
  currUser: User = new User(0, '', '', '', [], '');
  constructor(private httpClient: HttpClient) {
    this.getCurrUser();
  }
  async getCurrUser() {
    try {
      this.httpClient.get<User>
      ('http://localhost:7878/api/users/username/matei').subscribe((user) => {
        this.currUser = user;
        this.getMatchedUsers()
      });
    } catch (error) {
      console.error(error);
    }
  }
  async getMatchedUsers() {
    for(let i = 0; i < this.currUser.matches.length; i++) {
      this.httpClient.get<User>
      ('http://localhost:7878/api/users/' + this.currUser.matches[i]).subscribe((user) => {
        this.matchedUsers.push(user);
      });
    }
  }

}
