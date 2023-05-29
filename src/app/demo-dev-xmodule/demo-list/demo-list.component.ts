import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/shared/models/user';
import { DemoDetailViewComponent } from './demo-detail-view/demo-detail-view.component';
import { DemoDataService } from '../demo-data.service';
import { DemoGridViewComponent } from './demo-grid-view/demo-grid-view.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-demo-list',
  templateUrl: './demo-list.component.html',
  styleUrls: ['./demo-list.component.scss']
})
export class DemoListComponent implements OnInit {
  @ViewChild(DemoDetailViewComponent, { static: false }) detailView?: DemoDetailViewComponent;
  @ViewChild(DemoGridViewComponent, { static: false }) gridView?: DemoGridViewComponent;

  selectedUser?:User;
  isRowSelected=false;
  isEditing=false;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(
    private snackBar: MatSnackBar
   ) { }

  onEditEvent($event:{user:User,editMode:boolean}):void{
    this.isRowSelected=true;
    this.isEditing = $event.editMode;
    this.selectedUser = $event.user;
    // console.log($event);
  }

  onAddEvent($event:boolean):void{
    this.isRowSelected=true;
    this.isEditing = $event
    this.selectedUser=undefined;
  }

  onAddNewEvent($event:User):void{
    if (this.gridView != undefined) {
      this.gridView.dataSource.insert($event)
        .then(
          ()=> {
            this.snackBar.open("User added successfully",'',{
              duration:3000,
              horizontalPosition:'right',
              panelClass:'success',
              verticalPosition:'top'
            });
            this.isRowSelected=false;
          },
          (err) => {
            this.snackBar.open("Failed to add user",'',{
              duration:3000,
              horizontalPosition:'right',
              panelClass:'failure',
              verticalPosition:'top'
            });
            throw err;
          }
        )
    }    
  }

  onUpdateEvent($event:User):void{
    if (this.gridView != undefined) {
      this.gridView.dataSource.update($event.ID,$event)
      .then(
        ()=> {
          this.snackBar.open("User Updated successfully",'',{
            duration:3000,
            horizontalPosition:'right',
            panelClass:'success',
            verticalPosition:'top'
          });
          this.isRowSelected=false;
        },
        (err) => {
          this.snackBar.open("Failed to Update user",'',{
            duration:3000,
            horizontalPosition:'right',
            panelClass:'failure',
            verticalPosition:'top'
          });
          throw err;
        }
      )
    }
  }

  onDeleteEvent($event:User):void{
    if (this.gridView != undefined) {
      this.gridView.dataSource.remove($event.ID)
      .then(
        ()=> {
          this.snackBar.open("User Deleted successfully",'',{
            duration:3000,
            horizontalPosition:'right',
            panelClass:'success',
            verticalPosition:'top'
        });
        },
        (err) => {
          this.snackBar.open("Failed to delete user",'',{
            duration:3000,
            horizontalPosition:'right',
            panelClass:'failure',
            verticalPosition:'top'
          });
          throw err;
        }
      )
    }  
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit(): void {
  }

}
