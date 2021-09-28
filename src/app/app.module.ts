import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { WebservicesComponent } from './webservices/webservices.component';
import { AboutComponent } from './about/about.component';
import { OtherServicesComponent } from './other-services/other-services.component';
import { HomeComponent } from './home/home.component';
import { DocsReqComponent } from './docs-req/docs-req.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    WebservicesComponent,
    AboutComponent,
    OtherServicesComponent,
    HomeComponent,
    DocsReqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
