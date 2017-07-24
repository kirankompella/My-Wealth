import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary/summary.component';
import { DetailsComponent } from './details/details.component';
import { NewComponent } from './new/new.component';
import { FdRoutingModule } from './fd-routing.module';

@NgModule({
  imports: [
    CommonModule
    ,FdRoutingModule
  ],
  declarations: [SummaryComponent, DetailsComponent, NewComponent]
})
export class FdModule { }
