import { LoginService } from './../../services/login.service';
import { AdminService } from './../../services/admin.service';
import { CompanyService } from './../../services/company.service';
import { Gym } from './../../models/gym';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-all-gyms',
  templateUrl: './get-all-gyms.component.html',
  styleUrls: ['./get-all-gyms.component.css']
})
export class GetAllGymsComponent implements OnInit {

  public gyms: Gym[];
  editRowID: any = ' ';
  public id: number;
  public constructor(private companyService: CompanyService, private adminService: AdminService,
    private loginService: LoginService,
    private router: Router) {}
  
  ngOnInit(): void {
    this.adminService.getOneCompanyByEmail(this.loginService.email).subscribe(
      (c) => {
        this.id = c.id;
      },
      (err) => alert(err.message)
    );

    this.companyService.getAllGyms().subscribe(
      (data) => {
        this.gyms = data;
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  public deleteGym(id: number): void {
    if (confirm('Are you sure to delete?')) {
      this.companyService.deleteGym(id).subscribe(
        () => {
          alert('the Gym has deleted !');
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
  public updateGym(gym: Gym) {
    this.companyService.updateGym(gym).subscribe(
      () => {
        alert('the Gym has updated!');
      },
      (error) => console.log(error)
    );
  }
}
