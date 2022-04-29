import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserComponent } from './user/user.component';
import { LoginService } from './service/login.service';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { DispalyComponent } from './dispaly/dispaly.component';
import { AuthGuard } from './auth.guard';
import {UnsavedGuard} from './unsaved.guard';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TableComponent,
    NavBarComponent,
    UserComponent,
    DispalyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [LoginService,AuthGuard,UnsavedGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
