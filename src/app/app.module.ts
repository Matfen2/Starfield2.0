import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ModalPageComponent } from './pages/modal-page/modal-page.component';
import { PreReleasePageComponent } from './pages/pre-release-page/pre-release-page.component';
import { JoinPageComponent } from './pages/join-page/join-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { InscribePageComponent } from './pages/inscribe-page/inscribe-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ModalPageComponent,
    PreReleasePageComponent,
    JoinPageComponent,
    ContactPageComponent,
    InscribePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
