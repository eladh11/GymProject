import { User } from './../../models/user';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent  {
  public user = new User();

  public constructor(
    private adminService: AdminService,
    private route: Router
  ) {}

  public addUser(): void {
    this.adminService.addUser(this.user).subscribe(
      (c) => {
        alert('User:' + this.user.first + ' as added !');
        this.route.navigateByUrl('/login');
      },
      (err) => {
        alert('Error:' + err);
      }
    );
  }
}
