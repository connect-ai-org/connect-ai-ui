import { Component, OnInit } from '@angular/core';
import { LANDING_PAGE_CONTENT } from '../../constants/landing-page-content.constant';
import { Router } from '@angular/router';
import { UserInterfaceService } from 'src/app/modules/shared/services/user-interface.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {
  LANDING_PAGE_CONTENT = LANDING_PAGE_CONTENT;

  constructor(
    private router: Router,
    private uiService: UserInterfaceService
  ) { }

  ngOnInit(): void {
    this.scrollToId();
  }

  scrollToId(): void {
    const anchorId = sessionStorage.getItem('anchorId');
    if (anchorId) {
      setTimeout(() => {
        this.uiService.scrollToId(anchorId);
      });
      sessionStorage.removeItem('anchorId');
    }
  }
 
  onClickContactUs(): void {
    this.router.navigate(['contact']);
  }
}