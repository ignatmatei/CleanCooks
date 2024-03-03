import { Component } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatInputModule } from "@angular/material/input";
import { HttpClient,HttpEventType } from "@angular/common/http";
import { Router, RouterLinkActive } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { MatIcon } from "@angular/material/icon";
import { RouterLink } from "@angular/router"; import { MatButtonModule } from '@angular/material/button';
import { currUser } from '../currUser';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatIcon,
    RouterLink,
    RouterLinkActive,
    MatButtonModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent { error : string; constructor(private httpClient: HttpClient,
              private router: Router) {
  this.error = "";
  }

  signUpData = {
    email: '',
    username: '',
    password: '',
  };

  async signUp() {
    if (this.signUpData.username === ''
        || this.signUpData.email === ''
        || this.signUpData.password === '') {
    this.error = "Not Enough Info";
    }
    else {
    this.httpClient
    .post('https://cleancooks.azurewebsites.net/api/users/add', this.signUpData , {
     observe:"events",
    }
    )
    .subscribe(
     event => {
          switch(event.type) {
            case HttpEventType.Response:
              currUser.getInstance().addUsername(this.signUpData.username);
              this.router.navigate(['../home']);
              break;
          }
        },
     error => {
        this.error = error.statusText;
        }
    )
  }
}
}
