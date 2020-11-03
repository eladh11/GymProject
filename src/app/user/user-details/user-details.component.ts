import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import {Location} from '@angular/common';


@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public user: User;
  editRowID: any = ' ';
 
  public constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService,
    private _location: Location
   ) {}

  public ngOnInit(): void {
    this.adminService.getAllUsers().subscribe(
      (data) => {
        const id = +this.activatedRoute.snapshot.params.id;
        this.user = data.find((c) => c.id == id);
      },
      (err) => {
        alert(err.message);
      }
    );
  }



  public Edit(val) {
    this.editRowID = val;
  }
  public updateUser(user: User) {
    this.adminService.updateUser(user).subscribe(
      () => {
        alert('the User has updated!');
      },
      (error) => console.log(error)
    );
  }
  backClicked() {
    this._location.back();
  }
}

