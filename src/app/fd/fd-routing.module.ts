import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { NewComponent } from './new/new.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
    { path: 'summary', component: SummaryComponent },
    { path: 'new', component: NewComponent},
    { path: 'details', component: DetailsComponent }
];


@NgModule({
  imports: [
     RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: []
})
export class FdRoutingModule { }
