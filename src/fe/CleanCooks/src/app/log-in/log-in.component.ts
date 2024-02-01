import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {HttpClient, HttpErrorResponse, HttpEventType} from "@angular/common/http";
import {Router, RouterLinkActive} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";
import { catchError } from 'rxjs';

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
  error : string;
  constructor(private httpClient: HttpClient,
              private router: Router) {
    this.error = "";
  }

  loginData = {
    username: '',
    password: ''
  };

  async login() {
    this.httpClient
    .get('https://ccooks.azurewebsites.net/api/users/username/' + this.loginData.username, {
        observe: "events",
      })
    .subscribe(event => {
        switch(event.type) {
          case HttpEventType.Response:
          this.router.navigate(['../home']);
          break;
        }
      },
        error => {
          this.error =  error.statusText;
        }
      )
   }
}
