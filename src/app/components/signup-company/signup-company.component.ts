import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-signup-company',
  templateUrl: './signup-company.component.html',
  styleUrls: ['./signup-company.component.css']
})
export class SignupCompanyComponent   {
  email = new FormControl('', [Validators.required, Validators.email]);
  hide = true;
  public company = new Company();
  
  public constructor(
    private adminService: AdminService,
    private router: Router
  ) {}
   public addCompany(): void {
    this.adminService.addCompany(this.company).subscribe(
      (c) => {
        alert('Company:' + this.company.name + ' as added !');
        this.router.navigateByUrl('/login');
      },
      (err) => {
        alert('Error:' + err);
      }
    );
  }
  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
}





