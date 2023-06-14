import { AfterViewInit, Component, OnInit } from '@angular/core';
import { WEBSITE_NAME, SLOGAN, SERVICES } from '../../constants/landing-page-content.constant';
import { ActivatedRoute } from '@angular/router';
import { UserInterfaceService } from 'src/app/modules/shared/services/user-interface.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit, AfterViewInit {
  WEBSITE_NAME = WEBSITE_NAME;
  SLOGAN = SLOGAN;
  SERVICES = SERVICES;

  private fragment: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private uiService: UserInterfaceService
  ) { }

  ngOnInit(): void {
    this.route.fragment.subscribe(fragment => { this.fragment = fragment });
  }

  ngAfterViewInit(): void {
    if (this.fragment) {
      this.uiService.scrollToId(this.fragment);
    }
  }
}