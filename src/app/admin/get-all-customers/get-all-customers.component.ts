import { User } from './../../models/user';
import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-get-all-customers',
  templateUrl: './get-all-customers.component.html',
  styleUrls: ['./get-all-customers.component.css']
})
export class GetAllCustomersComponent   {

  public users: User[];
  editRowID: any = ' ';

  public constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.adminService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  public deleteUser(id: number): void {
    if (confirm('Are you sure to delete?')) {
      this.adminService.deleteUser(id).subscribe(
        () => {
          alert('the User has deleted !');
        },
        (err) => {
          alert(err.message);
        }
      );
    }
  }

  public Edit(val) {
    this.editRowID = val;
  }

  public updateUser(user: User) {
    this.adminService.updateUser(user).subscribe(
      (data) => {
        alert('the User has updated!');
      },
      (error) => alert(error)
    );
  }
}
