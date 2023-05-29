import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxAccordionModule, DxButtonModule, DxCheckBoxModule, DxDataGridModule, DxDropDownButtonModule, DxFormModule, DxRadioGroupModule, DxSelectBoxModule } from 'devextreme-angular';
import { DemoButtonComponent } from './demo-button/demo-button.component';
import { DemoGridComponent } from './demo-grid/demo-grid.component';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownButtonComponent } from './drop-down-button/drop-down-button.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { DataGridCustomizationComponent } from './data-grid-customization/data-grid-customization.component';
import { DemoFormComponent } from './demo-form/demo-form.component';
import { DataGridEventsComponent } from './data-grid-events/data-grid-events.component';
import { MaterialFormComponent } from './material-form/material-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { DataGridOdataApiComponent } from './data-grid-odata-api/data-grid-odata-api.component';
import { DemoListComponent } from './demo-list/demo-list.component';
import { DemoGridViewComponent } from './demo-list/demo-grid-view/demo-grid-view.component';
import { DemoDetailViewComponent } from './demo-list/demo-detail-view/demo-detail-view.component';
import { DemoDataService } from './demo-data.service';


const DXIMPORTS:any = [
  DxDataGridModule,
  DxButtonModule,
  DxDropDownButtonModule,
  DxSelectBoxModule,
  DxAccordionModule,
  DxFormModule,
  DxCheckBoxModule,
  DxRadioGroupModule,
]

const MATIMPORTS:any = [
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatSelectModule,
  MatRadioModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSnackBarModule,
]

@NgModule({
  declarations: [
    DemoButtonComponent,
    DemoGridComponent,
    DropDownButtonComponent,
    SelectBoxComponent,
    DataGridCustomizationComponent,
    DemoFormComponent,
    DataGridEventsComponent,
    MaterialFormComponent,
    DataGridOdataApiComponent,
    DemoListComponent,
    DemoGridViewComponent,
    DemoDetailViewComponent,
  ],
  imports: [
    DXIMPORTS,
    MATIMPORTS,
    BrowserModule,
    ReactiveFormsModule,
    CommonModule
  ],
exports:[
  // DemoButtonComponent,
  // DemoGridComponent,
  // DropDownButtonComponent
]
})
export class DemoDevXModule { }
