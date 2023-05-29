import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { SidebarComponent } from './sidebar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DxMenuModule } from 'devextreme-angular';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;
  let router : Router;
  let event : any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarComponent ],
      imports: [ 
        DxMenuModule,
        RouterTestingModule
       ],
    })
    .compileComponents();
  });
  
  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call navigateByUrl ', () => {
    const navigateSpy = jest.spyOn(router,'navigateByUrl');
    event = {
      itemData: {
        route:''
      }
    }
    component.onItemClick(event);
    expect(navigateSpy).toHaveBeenCalledWith('/');
 });
});
