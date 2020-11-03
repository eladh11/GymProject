import { CardioComponent } from './user/cardio/cardio.component';
import { BicepsComponent } from './user/biceps/biceps.component';
import { TricepsComponent } from './user/triceps/triceps.component';
import { AbsComponent } from './user/abs/abs.component';
import { LegsComponent } from './user/legs/legs.component';
import { ChestComponent } from './user/chest/chest.component';
import { BackComponent } from './user/back/back.component';
import { ShoulderComponent } from './user/shoulder/shoulder.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { AddCustomerComponent } from './admin/add-customer/add-customer.component';
import { GetAllCustomersComponent } from './admin/get-all-customers/get-all-customers.component';
import { GetAllCompaniesComponent } from './admin/get-all-companies/get-all-companies.component';
import { GymDetailsComponent } from './company/gym-details/gym-details.component';
import { AddGymComponent } from './company/add-gym/add-gym.component';
import { SignupCompanyComponent } from './components/signup-company/signup-company.component';
import { SignupComponent } from './components/signup/signup.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
import { GetAllGymsComponent } from './company/get-all-gyms/get-all-gyms.component';
import { UserComponent } from './user/user/user.component';
import { CompanyComponent } from './company/company/company.component';
import { AdminComponent } from './admin/admin/admin.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'user', component: UserComponent },
  { path: 'get-all-gyms', component: GetAllGymsComponent },
  { path: 'create-account', component: SignupComponent },
  { path: 'create-account-company', component: SignupCompanyComponent },
  { path: 'add-gym', component: AddGymComponent },
  { path: 'gym-details/:id', component: GymDetailsComponent },
  { path: 'get-all-companies', component: GetAllCompaniesComponent },
  { path: 'get-all-customers', component: GetAllCustomersComponent },
  { path: 'add-customer', component: AddCustomerComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'company-details/:id', component: CompanyDetailsComponent },
  { path: 'user-details/:id', component: UserDetailsComponent },
  { path: 'shoulder', component: ShoulderComponent },
  { path: 'back', component: BackComponent },
  { path: 'chest', component: ChestComponent },
  { path: 'legs', component: LegsComponent },
  { path: 'abs', component: AbsComponent },
  { path: 'triceps', component: TricepsComponent },
  { path: 'biceps', component: BicepsComponent },
  { path: 'cardio', component: CardioComponent },
  { path: '', component: LoginComponent , pathMatch: 'full'},
  { path: '**', component: LoginComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
