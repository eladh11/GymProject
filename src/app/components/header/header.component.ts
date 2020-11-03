import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) {}

  ngOnInit(): void {}

  public logout(): void {
    if (confirm('Are you sure to logout?')) {
      this.router.navigate(['/login']);
      this.loginService.log = true;
      this.loginService.type = ' ';
    }
  }
  public login(): boolean {
    if (this.loginService.log === true) {
      return true;
    } else return false;
  }
   
}