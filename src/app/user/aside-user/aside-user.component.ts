import { User } from './../../models/user';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-aside-user',
  templateUrl: './aside-user.component.html',
  styleUrls: ['./aside-user.component.css']
})
export class AsideUserComponent implements OnInit {
   user= new User();

  constructor(private adminService:AdminService,
    private loginService:LoginService) { }

  ngOnInit(): void {
    this.adminService.getOneCustomerByEmail(this.loginService.email).subscribe(
      data=>{
      this.user=data;
    
      },
      (err) => {
    alert(err.message);
  }
);
}
}
