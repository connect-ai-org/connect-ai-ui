import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { NgModule } from "@angular/core";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { DesignPageComponent } from "./components/design-page/design-page.component";
import { ContactPageComponent } from "./components/contact-page/contact-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'design', component: DesignPageComponent },
      { path: 'contact', component: ContactPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}