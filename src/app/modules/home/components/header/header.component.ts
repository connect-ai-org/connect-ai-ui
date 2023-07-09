import { HEADER_CONTENT } from './../../constants/header-footer-content.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  HEADER_CONTENT;
  isOpenMenu = false;

  constructor() { 
    this.HEADER_CONTENT = HEADER_CONTENT(this);
  }

  ngOnInit(): void {
  }

  onToggleMenu(): void {
    this.isOpenMenu = !this.isOpenMenu;
  }

}
