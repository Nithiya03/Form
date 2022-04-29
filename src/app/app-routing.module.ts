import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DispalyComponent } from './dispaly/dispaly.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { UnsavedGuard } from './unsaved.guard';
import { UserComponent } from './user/user.component';
const routes: Routes = [
{path:'login' ,component:LoginComponent,canDeactivate:[UnsavedGuard]},
{ path: 'user', component: UserComponent},
{ path: 'table', component: TableComponent},
{ path: 'dispaly/:id', component: DispalyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }