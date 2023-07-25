import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { HomeRoutingModule } from "./home-routing.module";
import { TypingAnimatorModule } from 'angular-typing-animator';

import { ContactsService } from "./services/contacts.service";

import { HomeComponent } from "./components/home/home.component";
import { LandingPageComponent } from "./components/landing-page/landing-page.component";
import { DesignPageComponent } from "./components/design-page/design-page.component";
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MarketingPageComponent } from './components/marketing-page/marketing-page.component';
import { DigitalPageComponent } from './components/digital-page/digital-page.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  providers: [
    ContactsService
  ],
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    DesignPageComponent,
    ContactPageComponent,
    MarketingPageComponent,
    DigitalPageComponent,
    ContactsComponent
  ],
  imports: [
    RouterModule,
    TypingAnimatorModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule {}