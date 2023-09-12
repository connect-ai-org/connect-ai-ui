import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { NgModule } from "@angular/core";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { DesignPageComponent } from "./components/design-page/design-page.component";
import { ContactPageComponent } from "./components/contact-page/contact-page.component";
import { DigitalPageComponent } from "./components/digital-page/digital-page.component";
import { MarketingPageComponent } from "./components/marketing-page/marketing-page.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: '', component: LandingPageComponent },
      { path: 'design', component: DesignPageComponent },
      { path: 'digital', component: DigitalPageComponent },
      { path: 'marketing', component: MarketingPageComponent },
      // { path: 'contact', component: ContactPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}