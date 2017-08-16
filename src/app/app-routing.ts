
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from "@angular/core/src/core";
import { DepartmentComponent } from "app/department/department.component";
import { DashBoardComponent } from "app/dash-board/dash-board.component";
import { ModuleWithProviders } from "@angular/core/core";
import { HomeComponent } from "app/home/home.component";
import { TemplateAndDataBindingComponent } from "app/template-and-data-binding/template-and-data-binding.component";
import { FormsComponent } from "app/forms/forms.component";
import { NgModulesComponent } from "app/ng-modules/ng-modules.component";
import { APIComponent } from "app/api/api.component";
import { AnimationComponent } from "app/animation/animation.component";
import { DIComponent } from "app/di/di.component";
import { TdfComponent } from "app/forms/tdf/tdf.component";
const appRoutes: Routes = [
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'home' ,component:HomeComponent},
    {path:'dashboard',component:DashBoardComponent},
    {path:'dept',component:DepartmentComponent},
       {path:'template' ,component:TemplateAndDataBindingComponent},
    {path:'forms',component:FormsComponent},
    {path:'ngmodules',component:NgModulesComponent},
    {path:'animation',component:AnimationComponent},
    {path:'api',component:APIComponent},
    {path:'di',component:DIComponent},
    {path:'tdf', component:TdfComponent}
]
export const AppRouting: ModuleWithProviders = RouterModule.forRoot(appRoutes);