import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';
import { AppComponent } from './app.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { DepartmentComponent } from './department/department.component';
import { AppRouting } from "app/app-routing";
import { RouterModule } from "@angular/router/router";
import { HomeComponent } from './home/home.component';
import { TemplateAndDataBindingComponent } from './template-and-data-binding/template-and-data-binding.component';
import { FormsComponent } from './forms/forms.component';
import { NgModulesComponent } from './ng-modules/ng-modules.component';
import { DIComponent } from './di/di.component';
import { APIComponent } from './api/api.component';
import { AnimationComponent } from './animation/animation.component';
import { TdfComponent } from './forms/tdf/tdf.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    DepartmentComponent,
    HomeComponent,
    TemplateAndDataBindingComponent,
    FormsComponent,
    NgModulesComponent,
    DIComponent,
    APIComponent,
    AnimationComponent,
    TdfComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRouting, 
    FormsModule,
    AngularMultiSelectModule 
       
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
