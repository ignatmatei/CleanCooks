import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {HttpClient} from '@angular/common/http';
import {FormsModule} from "@angular/forms"
import {User} from "../models/user";
import {MatIcon} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatIcon,
    MatButtonModule
  ],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  currUser: User = new User(0, '', '', '', [], '');
  profile = {
    insta: '',
    age: '',
    description: '',
    city: ''
  };
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
  async saveProfile(profile : any) {
    console.log(profile);
    try {
      this.httpClient.patch<User>('https://ccooks.azurewebsites.net/api/users/52', profile).subscribe((user) => {
        this.currUser = user;
        this.router.navigate(['../home']);
    });
    } catch (error) {
  console.error(error);
    }
     }
}
