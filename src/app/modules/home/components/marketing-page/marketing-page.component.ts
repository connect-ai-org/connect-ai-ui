import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MARKETING_PAGE_CONTENT } from '../../constants/marketing-page-content.constant';

@Component({
  selector: 'app-marketing-page',
  templateUrl: './marketing-page.component.html',
  styleUrls: ['./marketing-page.component.scss']
})
export class MarketingPageComponent implements OnInit {
  MARKETING_PAGE_CONTENT: any;
  
  constructor(private router: Router) {
    this.MARKETING_PAGE_CONTENT = MARKETING_PAGE_CONTENT(router);
  }

  ngOnInit(): void {
  }

}
