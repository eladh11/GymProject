import { LoginService } from './../../services/login.service';
import { AdminService } from './../../services/admin.service';
import { Company } from './../../models/company';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aside-company',
  templateUrl: './aside-company.component.html',
  styleUrls: ['./aside-company.component.css']
})
export class AsideCompanyComponent implements OnInit {
    company= new Company();

  constructor(private adminService:AdminService,
    private loginService:LoginService) { }

  ngOnInit(): void {
    this.adminService.getOneCompanyByEmail(this.loginService.email).subscribe(
      data=>{
      this.company=data;
    
      },
      (err) => {
    alert(err.message);
  }
);
}
}

