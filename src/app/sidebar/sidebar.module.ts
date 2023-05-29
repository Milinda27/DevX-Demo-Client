import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DxMenuModule } from 'devextreme-angular';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    DxMenuModule,
    RouterModule,
  ],
  exports: [
    SidebarComponent
  ]
})
export class SidebarModule { }
