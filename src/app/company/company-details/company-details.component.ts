 import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company';
 import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent  {
  public company: Company;
  editRowID: any = ' ';

  public constructor(
    private activatedRoute: ActivatedRoute,
    private adminService: AdminService,
   ) {}

  public ngOnInit(): void {
    this.adminService.getAllCompanies().subscribe(
      (comps) => {
        const id = +this.activatedRoute.snapshot.params.id;
        this.company = comps.find((c) => c.id == id);
      },
      (err) => {
        alert(err.message);
      }
    );
  }



  public Edit(val) {
    this.editRowID = val;
  }
  public updateCompany(company: Company) {
    this.adminService.updateCompany(company).subscribe(
      () => {
        alert('the Company has updated!');
      },
      (error) => console.log(error)
    );
  }
}
