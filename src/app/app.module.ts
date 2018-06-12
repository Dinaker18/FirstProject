import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import {FormsModule} from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ReportsComponent } from './reports/reports.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashBoardComponent,
    ReportsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    FormsModule,
    ChartsModule,
    RouterModule.forRoot ([
      {
        path:'app-dash-board',
        component: DashBoardComponent
      },
      {
        path:'login',
        component: LoginComponent
      },
      {
        path:'reports',
        component: ReportsComponent
      },
      {
        path:'form',
        component: FormComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
