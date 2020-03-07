import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { BoardComponent } from './../component/calculator/board/board.component';
import { RegistrationComponent } from './../component/registration/registration.component';
import { AboutComponent } from './../component/about/about.component';


const routes: Routes = [
  {path: 'registration' , component: RegistrationComponent},
  {path: 'calculation' , component: BoardComponent},
  {path: 'about' , component: AboutComponent},
  {path: '' , redirectTo: '/about', pathMatch: 'full'}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
