import { Router } from '@angular/router';
import { DIGITAL_PAGE_CONTENT } from './../../constants/digital-page-content.constant';
import { Component, OnInit } from '@angular/core';
import { UserInterfaceService } from 'src/app/modules/shared/services/user-interface.service';

@Component({
  selector: 'app-digital-page',
  templateUrl: './digital-page.component.html',
  styleUrls: ['./digital-page.component.scss']
})
export class DigitalPageComponent implements OnInit {
  DIGITAL_PAGE_CONTENT;

  constructor(
    private router: Router,
    private uiService: UserInterfaceService
  ) {
    this.DIGITAL_PAGE_CONTENT = DIGITAL_PAGE_CONTENT(router);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.uiService.scrollToTop();
    }, 100);
  }

}
