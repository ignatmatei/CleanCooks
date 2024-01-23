import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatIcon
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
    try {
      this.httpClient.get('http://localhost:7878/api/users/username/' + this.loginData.username).subscribe((user) => {
        }
      );
    } catch (UserNotFoundException) {
      console.error(UserNotFoundException);
    }
    this.router.navigate(['/home']);
  }
}
