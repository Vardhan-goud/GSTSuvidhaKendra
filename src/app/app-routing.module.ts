import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebservicesComponent } from './webservices/webservices.component';
import { AboutComponent } from './about/about.component';
import { OtherServicesComponent } from './other-services/other-services.component';

const routes: Routes = [
  {path:'otherServices',component:OtherServicesComponent},
  {path:"about",component:AboutComponent},
  {path:"webServices",component:WebservicesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
