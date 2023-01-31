import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MapComponent} from "./map/map.component";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {PanicComponent} from './panic/panic.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {MatListModule} from "@angular/material/list";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {LeafletModule} from "@asymmetrik/ngx-leaflet";
import {RideInconsistencyComponent} from "./ride-inconsistency/ride-inconsistency.component";
import {RideHistoryComponent} from "./ride-history/ride-history.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";

@NgModule({
  declarations: [
    RideHistoryComponent,
    MapComponent,
    PanicComponent,
    ChangePasswordComponent,
    RideInconsistencyComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        LeafletModule,
        MatTableModule,
        MatPaginatorModule
    ],
  exports: [
    MapComponent,
    PanicComponent,
    ChangePasswordComponent,
    RideInconsistencyComponent,
    RideHistoryComponent
  ],
})
export class SharedModule {
}
