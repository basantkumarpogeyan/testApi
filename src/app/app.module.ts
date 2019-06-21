/* import { CommonModule } from '@angular/common';
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Route, RouterModule } from '@angular/router';
import { ScrollingModule } from '@angular/cdk/scrolling';

import { AppComponent } from './app.component';
import { EmployeeService } from './employee.service';
import { OrderByPipe } from './order-by.pipe';
import { ObserveableTestComponent } from './observeable-test/observeable-test.component';

const routes: Route[] = [
  { path: 'observeableExample', component: ObserveableTestComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ObserveableTestComponent,
    OrderByPipe
  ],
  imports: [
    /* CommonModule */
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
