import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { UserInterfaceService } from '../../../shared/services/user-interface.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isHomePage = false;
  isContactPage = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private uiService: UserInterfaceService
  ) {}

  ngOnInit(): void {
    this.checkPage(this.router.url);

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {

        this.checkPage(event.url);

      }
    });

    this.route.fragment.subscribe((fragment: string | null) => {
      if (!fragment) {
        this.uiService.scrollToTop();
      } else {
        this.uiService.scrollToId(fragment);
      }
    });
  }

  checkPage(pageUrl: string): void {
    let url = pageUrl;
    const hashIndex = pageUrl.indexOf('#');
    if (hashIndex !== -1) {
      url = url.slice(0, hashIndex);
    }
    this.isHomePage = url === '/';
    this.isContactPage = url === '/contact';

    if (this.isContactPage) {
      this.uiService.scrollToTop();
    }
  }

}