import { UserInterfaceService } from './../shared/services/user-interface.service';
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private uiService: UserInterfaceService
  ) {}

  ngOnInit(): void {}

  scrollToElement(id: string) {
    this.uiService.scrollToId(id);
  }  
}