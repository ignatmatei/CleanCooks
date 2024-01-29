import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {HttpClient} from "@angular/common/http";
import {Router, RouterLinkActive} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatIcon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {
  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  loginData = {
    username: '',
    password: ''
  };

  async login() {
    this.httpClient.get('https://ccooks.azurewebsites.net/api/users/username/' + this.loginData.username).subscribe(
      (user) => {
        // Handle successful response here
        this.router.navigate(['/home']);
      },
      (error) => {
        // Handle error response here
        console.error(error.error.message);
      }
    );
  }
}
