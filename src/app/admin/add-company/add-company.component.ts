import { Company } from './../../models/company';
import { Component } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent   {
  public company = new Company();

  public constructor(private adminService: AdminService) {}

  public addCompany(): void {
    this.adminService.addCompany(this.company).subscribe(
      (c) => {
        alert('Company:' + this.company.name + ' as added !');
      },
      (err) => {
        alert('Error:' + err);
      }
    );
  }
}
