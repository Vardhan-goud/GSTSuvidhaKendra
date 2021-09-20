import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OtherServicesComponent } from './other-services/other-services.component';

const routes: Routes = [
  {path:'otherServices',component:OtherServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
