import { Router } from '@angular/router';
import { DIGITAL_PAGE_CONTENT } from './../../constants/digital-page-content.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-page',
  templateUrl: './digital-page.component.html',
  styleUrls: ['./digital-page.component.scss']
})
export class DigitalPageComponent implements OnInit {
  DIGITAL_PAGE_CONTENT;

  constructor(private router: Router) {
    this.DIGITAL_PAGE_CONTENT = DIGITAL_PAGE_CONTENT(router);
  }

  ngOnInit(): void {
  }

}
