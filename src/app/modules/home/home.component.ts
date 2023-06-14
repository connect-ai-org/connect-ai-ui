import { ActivatedRoute, Event, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { UserInterfaceService } from './../shared/services/user-interface.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isHomePage = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private uiService: UserInterfaceService
  ) {}

  ngOnInit(): void {
    this.checkIsHomePage(this.router.url);

    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationEnd) {
        this.checkIsHomePage(event.url)
      }
    });

    this.route.fragment.subscribe((fragment: string | null) => {
      setTimeout(() => {
        if (fragment) {
          this.uiService.scrollToId(fragment);
        } else {
          this.uiService.scrollToTop();
        }
      }, 200);
    });
  }

  checkIsHomePage(pageUrl: string): void {
    let url = pageUrl;
    const hashIndex = pageUrl.indexOf('#');
    if (hashIndex !== -1) {
      url = url.slice(0, hashIndex);
    }
    this.isHomePage = url === '/';
  } 

}