import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterComponent } from './master/master.component';
import { HostRoutingModule } from './host-routing.module'
import { FdModule } from '../fd/fd.module'

@NgModule({
  imports: [
    CommonModule,
    FdModule,
    HostRoutingModule
  ],
  declarations: [MasterComponent]
})
export class HostModule { }
