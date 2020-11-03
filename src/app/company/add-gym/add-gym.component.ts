import { AdminService } from './../../services/admin.service';
import { LoginService } from './../../services/login.service';
import { CompanyService } from './../../services/company.service';
import { Gym } from './../../models/gym';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-gym',
  templateUrl: './add-gym.component.html',
  styleUrls: ['./add-gym.component.css']
})
export class AddGymComponent implements OnInit  {
  public gym = new Gym();
  public id:number;

  public constructor(private companyService: CompanyService,private loginService:LoginService,private adminService:AdminService) {}
  ngOnInit(): void {
this.adminService.getOneCompanyByEmail(this.loginService.email).subscribe(
  data=>{
    this.id=data.id;
    this.gym.companyID=this.id;
  },
  (err) => {
    alert('Error:' + err);
  }
);
    
   }

  public addGym(): void {
    
    this.companyService.addGym(this.gym).subscribe(
      (c) => {
        alert('Gym as added !');
      },
      (err) => {
        alert('Error:' + err);
      }
    );
  }
}
