import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { ToolBarComponent } from './components/tool-bar/tool-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { AdminComponent } from './admin/admin/admin.component';
import { UserComponent } from './user/user/user.component';
import { CompanyComponent } from './company/company/company.component';
import {MatMenuModule} from '@angular/material/menu';
import { AdiseAdminComponent } from './admin/adise-admin/adise-admin.component';
import { AsideCompanyComponent } from './company/aside-company/aside-company.component';
import { AsideUserComponent } from './user/aside-user/aside-user.component';
import { GetAllCompaniesComponent } from './admin/get-all-companies/get-all-companies.component';
import { GetAllCustomersComponent } from './admin/get-all-customers/get-all-customers.component';
import { AddCompanyComponent } from './admin/add-company/add-company.component';
import { AddCustomerComponent } from './admin/add-customer/add-customer.component';
import { CompanyDetailsComponent } from './company/company-details/company-details.component';
import { GetAllGymsComponent } from './company/get-all-gyms/get-all-gyms.component';
import { AddGymComponent } from './company/add-gym/add-gym.component';
import { GymDetailsComponent } from './company/gym-details/gym-details.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { SignupComponent } from './components/signup/signup.component';
import { SignupCompanyComponent } from './components/signup-company/signup-company.component';
import { ShoulderComponent } from './user/shoulder/shoulder.component';
import { BackComponent } from './user/back/back.component';
import { TricepsComponent } from './user/triceps/triceps.component';
import { BicepsComponent } from './user/biceps/biceps.component';
import { LegsComponent } from './user/legs/legs.component';
import { ChestComponent } from './user/chest/chest.component';
import { AbsComponent } from './user/abs/abs.component';
import { CardioComponent } from './user/cardio/cardio.component';
 
 
 
 
 

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    ToolBarComponent,
    AdminComponent,
    UserComponent,
    CompanyComponent,
    AdiseAdminComponent,
    AsideCompanyComponent,
    AsideUserComponent,
    GetAllCompaniesComponent,
    GetAllCustomersComponent,
    AddCompanyComponent,
    AddCustomerComponent,
     CompanyDetailsComponent,
    GetAllGymsComponent,
    AddGymComponent,
    GymDetailsComponent,
    UserDetailsComponent,
    SignupComponent,
    SignupCompanyComponent,
    ShoulderComponent,
    BackComponent,
    TricepsComponent,
    BicepsComponent,
    LegsComponent,
    ChestComponent,
    AbsComponent,
    CardioComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
     MatListModule,
    MatTableModule,
    FormsModule,
    MatMenuModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

