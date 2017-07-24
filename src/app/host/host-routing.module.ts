import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MasterComponent } from './master/master.component';
import { FdModule } from './../fd/fd.module';

export const routes: Routes = [
    { path: 'host', component: MasterComponent ,
    children: [
          { path: 'fd', loadChildren: 'app/fd/fd.module#FdModule' }
      ]
    }
    
];


@NgModule({
  imports: [
    FdModule,
     RouterModule.forChild(routes),
    ],
  exports: [RouterModule]
})
export class HostRoutingModule { }
