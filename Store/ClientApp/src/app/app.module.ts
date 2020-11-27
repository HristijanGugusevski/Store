import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { LoginComponent } from './Login/login.component';
import { Register } from './Register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Repository } from './Services/Repository';
import { LoaderModule } from './Loader/loader.module';
import { LoaderComponent } from './Loader/loader.component';
import { TableDataComponent } from './TableData/tableData.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    LoginComponent,
    Register,
    TableDataComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    LoaderModule,


    RouterModule.forRoot([
      { path: '', component: LoginComponent, pathMatch: 'full' },
      { path: 'tabledata', component: TableDataComponent },
      { path: 'register', component: Register },
      { path: 'login', component: LoginComponent },
    ])
  ],
  providers: [Repository],
  bootstrap: [AppComponent]
})
export class AppModule { }
