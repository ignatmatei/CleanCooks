import { Component } from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {HttpClient} from "@angular/common/http";
import {Router, RouterLinkActive} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatIcon} from "@angular/material/icon";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatIcon,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  constructor(private httpClient: HttpClient,
              private router: Router) {
  }

  signUpData = {
    email: '',
    username: '',
    password: '',
  };

  async signUp() {
    this.httpClient.post('https://ccooks.azurewebsites.net/api/users/add', this.signUpData).subscribe(
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
