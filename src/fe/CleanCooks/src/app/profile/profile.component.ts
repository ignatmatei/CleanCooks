import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import {User} from "../models/user";
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    FormsModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  currUser: User = new User(0, '', '', '', [], '');
  constructor(private router: Router, private httpClient: HttpClient) {
   this.getCurrUser();
  }
 async getCurrUser() {
    try {
      this.httpClient.get<User>
      ('https://ccooks.azurewebsites.net/api/users/52').subscribe((user) => {
        this.currUser = user;
      });
    } catch (error) {
      console.error(error);
    }
  }

}
