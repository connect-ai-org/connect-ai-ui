import { Component, OnInit } from '@angular/core';
import { CONTACT_PAGE_CONTENT } from './../../constants/contact-page-content.constant';
import { UserInterfaceService } from 'src/app/modules/shared/services/user-interface.service';

interface IDisplayOption {
  isShowNewClientEnquiryForm: boolean,
  isShowContactForm: boolean,
  isShowSupportTicketForm: boolean,
}
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  CONTACT_PAGE_CONTENT;

  displayOptions: IDisplayOption = {
    isShowNewClientEnquiryForm: false,
    isShowContactForm: false,
    isShowSupportTicketForm: false,
  }

  constructor(
    private uiService: UserInterfaceService,
  ) {
    this.CONTACT_PAGE_CONTENT = CONTACT_PAGE_CONTENT(this);
  }

  ngOnInit(): void {
  }

  showForm(name: 'new-enquiry' | 'contact' | 'support-ticket' | null | undefined ): void {
    for (const key in this.displayOptions) {
      this.displayOptions[key as keyof IDisplayOption] = false;
    }
    switch (name) {
      case 'new-enquiry':
        this.displayOptions.isShowNewClientEnquiryForm = true;
        break;
      case 'contact':
        this.displayOptions.isShowContactForm = true;
        break;
      case 'support-ticket':
        this.displayOptions.isShowSupportTicketForm = true;
        break;
      default:
        break;
    }
  } 

  onEnquireNowClicked(): void {
    this.showForm('new-enquiry');
    setTimeout(() => {
      this.uiService.scrollToId('new-client-enquiry-form');
    }, 200);
  }

  onContactUsClicked(): void {
    this.showForm('contact');
    setTimeout(() => {
      this.uiService.scrollToId('contact-form');
    }, 200);
  }

  onSubmitTicketClicked(): void {
    this.showForm('support-ticket');
    setTimeout(() => {
      this.uiService.scrollToId('support-ticket-form');
    }, 200);
  }

}
