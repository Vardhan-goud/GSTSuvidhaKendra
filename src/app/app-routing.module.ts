import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebservicesComponent } from './webservices/webservices.component';

const routes: Routes = [
  {path:"webServices",component:WebservicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
