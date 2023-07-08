import { Component, OnInit } from '@angular/core';
import { LANDING_PAGE_CONTENT } from '../../constants/landing-page-content.constant';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})

export class LandingPageComponent implements OnInit {
  LANDING_PAGE_CONTENT = LANDING_PAGE_CONTENT;

  constructor(private router: Router) { }

  ngOnInit(): void {}

  onClickContactUs(): void {
    this.router.navigate(['contact']);
  }
}