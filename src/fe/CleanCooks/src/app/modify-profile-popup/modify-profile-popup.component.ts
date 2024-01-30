import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-modify-profile-popup',
  standalone: true,
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatIconModule
  ],
  ],
  templateUrl: './modify-profile-popup.component.html',
  styleUrl: './modify-profile-popup.component.scss'
})
export class ModifyProfilePopupComponent {
  constructor(private router: Router) {

  }
  closeDialog() {
    this.router.navigate(['../profile']);
  }
}
