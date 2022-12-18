import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DriverAccountComponent} from "./driver-account/driver-account.component";
import {DriverSideNavigationComponent} from "./driver-side-navigation/driver-side-navigation.component";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {DriverService} from "./driver.service";

@NgModule({
  declarations: [
    DriverAccountComponent,
    DriverSideNavigationComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
    MatSlideToggleModule,
    FormsModule,
    RouterOutlet,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    DriverAccountComponent,
    DriverSideNavigationComponent
  ],
  providers: [
    DriverService
  ]
})
export class DriverModule { }
