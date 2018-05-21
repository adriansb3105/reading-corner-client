import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

const router:Routes=[
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(router)],
  exports:[RouterModule]
})

export class AppRoutingModule { }
