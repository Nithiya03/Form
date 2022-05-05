import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ChildguardGuard } from './childguard.guard';
import { DispalyComponent } from './dispaly/dispaly.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { UnsavedGuard } from './unsaved.guard';
import { UserComponent } from './user/user.component';
const routes: Routes = [
{path:'login' ,component:LoginComponent,canDeactivate:[UnsavedGuard],canActivate:[AuthGuard]},
{ path: 'user', component: UserComponent},
{ path: 'table', component: TableComponent,
children:[{
path: 'dispaly/:id', component: DispalyComponent,canActivateChild:[ChildguardGuard]}
]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }