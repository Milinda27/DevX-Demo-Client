import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoButtonComponent } from './demo-dev-xmodule/demo-button/demo-button.component';
import { DemoGridComponent } from './demo-dev-xmodule/demo-grid/demo-grid.component';
import { DropDownButtonComponent } from './demo-dev-xmodule/drop-down-button/drop-down-button.component';
import { SelectBoxComponent } from './demo-dev-xmodule/select-box/select-box.component';
import { DemoFormComponent } from './demo-dev-xmodule/demo-form/demo-form.component';
import { DataGridCustomizationComponent } from './demo-dev-xmodule/data-grid-customization/data-grid-customization.component';
import { DataGridEventsComponent } from './demo-dev-xmodule/data-grid-events/data-grid-events.component';
import { MaterialFormComponent } from './demo-dev-xmodule/material-form/material-form.component';
import { DataGridOdataApiComponent } from './demo-dev-xmodule/data-grid-odata-api/data-grid-odata-api.component';
import { DemoListComponent } from './demo-dev-xmodule/demo-list/demo-list.component';

const routes: Routes = [
  {path:'button',component:DemoButtonComponent},
  {path:'dataGrid',component:DemoGridComponent},
  {path:'dropDownButton',component:DropDownButtonComponent},
  {path:'selectBox',component:SelectBoxComponent},
  {path:'customDataGrid',component:DataGridCustomizationComponent},
  {path:'form',component:DemoFormComponent},
  {path:'gridEvents',component:DataGridEventsComponent},
  {path:'materialForm',component:MaterialFormComponent},
  {path:'odataApiGrid',component:DataGridOdataApiComponent},
  {path:'listView',component:DemoListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
