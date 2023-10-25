import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { PreReleasePageComponent } from './pages/pre-release-page/pre-release-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { JoinPageComponent } from './pages/join-page/join-page.component';
import { InscribePageComponent } from './pages/inscribe-page/inscribe-page.component';

const routes: Routes = [
  {path: '', redirectTo:'/main-page', pathMatch:'full'},
  {path: "pre-release-page", component: PreReleasePageComponent},
  {path: "main-page", component: MainPageComponent},
  {path: "join-page", component: JoinPageComponent},
  {path: "contact-page", component: ContactPageComponent},
  {path: "inscribe-page", component: InscribePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
