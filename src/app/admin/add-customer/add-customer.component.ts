import { User } from './../../models/user';
import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

  public user = new User();

  public constructor(private adminService: AdminService) {}

  public addUser(): void {
    this.adminService.addUser(this.user).subscribe(
      (u) => {
        alert('User:' + this.user.first + ' as added !');
      },
      (err) => {
        alert('Error:' + err);
      }
    );
  }
}