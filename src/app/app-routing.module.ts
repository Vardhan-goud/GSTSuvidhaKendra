import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebservicesComponent } from './webservices/webservices.component';
import { AboutComponent } from './about/about.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { HomeComponent } from './home/home.component';
import { DocsReqComponent } from './docs-req/docs-req.component';

const routes: Routes = [
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"home/:name",component:DocsReqComponent},
  {path:'otherServices',component:OtherServicesComponent},
  {path:"about",component:AboutComponent},
  {path:"webServices",component:WebservicesComponent}, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
