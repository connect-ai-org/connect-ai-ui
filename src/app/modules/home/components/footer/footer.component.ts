import { FOOTER_CONTENT } from '../../constants/header-footer-content.constant';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  FOOTER_CONTENT = FOOTER_CONTENT;

  constructor() { }

  ngOnInit(): void {
  }

}
