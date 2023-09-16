import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MARKETING_PAGE_CONTENT } from '../../constants/marketing-page-content.constant';
import { UserInterfaceService } from 'src/app/modules/shared/services/user-interface.service';

@Component({
  selector: 'app-marketing-page',
  templateUrl: './marketing-page.component.html',
  styleUrls: ['./marketing-page.component.scss']
})
export class MarketingPageComponent implements OnInit {
  MARKETING_PAGE_CONTENT: any;

  constructor(
    private router: Router,
    private uiService: UserInterfaceService
  ) {
    this.MARKETING_PAGE_CONTENT = MARKETING_PAGE_CONTENT(router);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.uiService.scrollToTop();
    }, 100);
  }

}
