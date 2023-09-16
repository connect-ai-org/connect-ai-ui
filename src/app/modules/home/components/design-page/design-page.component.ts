import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DESIGN_PAGE_CONTENT } from './../../constants/design-page-content.constant';
import { UserInterfaceService } from 'src/app/modules/shared/services/user-interface.service';

@Component({
  selector: 'app-design-page',
  templateUrl: './design-page.component.html',
  styleUrls: ['./design-page.component.scss']
})

export class DesignPageComponent implements OnInit {
  DESIGN_PAGE_CONTENT;

  constructor(
    private router: Router,
    private uiService: UserInterfaceService
  ) {
    this.DESIGN_PAGE_CONTENT = DESIGN_PAGE_CONTENT(router);
  }

  ngOnInit() {
    setTimeout(() => {
      this.uiService.scrollToTop();
    }, 100);
  }
}