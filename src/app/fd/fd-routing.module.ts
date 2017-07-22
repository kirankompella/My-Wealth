import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component'

const routes: Routes = [
  //  { path: 'host/fd/fdSummary', component: SummaryComponent }
];


@NgModule({
  imports: [
     RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: []
})
export class FdRoutingModule { }
