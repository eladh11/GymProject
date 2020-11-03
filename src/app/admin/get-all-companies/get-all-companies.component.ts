import { AdminService } from './../../services/admin.service';
import { Company } from './../../models/company';
import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-get-all-companies',
  templateUrl: './get-all-companies.component.html',
  styleUrls: ['./get-all-companies.component.css']
})
export class GetAllCompaniesComponent implements OnInit {

  
  public comps: Company[];
  editRowID: any = ' ';
  public id: number;
  public constructor(private adminService: AdminService 
      ) {}
     ngOnInit(): void {
      this.adminService.getAllCompanies().subscribe(
        (companies) => {
          this.comps = companies;
        },
        (err) => {
          alert(err.message);
        }
      );
    }
  
    public deleteCompany(id: number): void {
      if (confirm('Are you sure to delete?')) {
        this.adminService.deleteCompany(id).subscribe(
          () => {
            alert('the Company has deleted !');
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
    public updateCompany(company: Company) {
      this.adminService.updateCompany(company).subscribe(
        (data) => {
          alert('the Company has updated!');
        },
        (error) => console.log(error)
      );
    }
  }