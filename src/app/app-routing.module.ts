import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
 { path: '', redirectTo: 'host', pathMatch: 'full'} 
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{enableTracing:true})
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
