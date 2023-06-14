import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { TypingAnimatorModule } from 'angular-typing-animator';

import { HomeComponent } from "./home.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { DesignPageComponent } from "./components/design-page/design-page.component";

@NgModule({
  declarations: [
    HomeComponent,
    LandingPageComponent,
    DesignPageComponent
  ],
  imports: [
    RouterModule,
    TypingAnimatorModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule {}