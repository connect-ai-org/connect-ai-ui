import { AfterViewInit, Component, OnInit } from '@angular/core';
import { LANDING_PAGE_CONTENT } from '../../constants/landing-page-content.constant';
import { ActivatedRoute } from '@angular/router';
import { UserInterfaceService } from 'src/app/modules/shared/services/user-interface.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {
  LANDING_PAGE_CONTENT = LANDING_PAGE_CONTENT;

  constructor() { }

  ngOnInit(): void {}

}