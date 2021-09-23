import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { OtherServicesComponent } from './other-services/other-services.component';

const routes: Routes = [
  {path:'otherServices',component:OtherServicesComponent},
  {path:"about",component:AboutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
