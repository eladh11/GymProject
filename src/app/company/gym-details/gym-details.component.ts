import { CompanyService } from './../../services/company.service';
import { Gym } from './../../models/gym';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gym-details',
  templateUrl: './gym-details.component.html',
  styleUrls: ['./gym-details.component.css']
})
export class GymDetailsComponent implements OnInit {

  public gym: Gym;
 
  public constructor(
    private activatedRoute: ActivatedRoute,
    private companyService: CompanyService,
   ) {}

  public ngOnInit(): void {
    this.companyService.getAllGyms().subscribe(
      (gyms) => {
        const id = +this.activatedRoute.snapshot.params.id;
        this.gym = gyms.find((g) => g.id == id);
      },
      (err) => {
        alert(err.message);
      }
    );
  }

}
