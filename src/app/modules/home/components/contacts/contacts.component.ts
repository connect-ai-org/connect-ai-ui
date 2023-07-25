import { Component, OnInit } from '@angular/core';
import { CONTACT_FORM_IDS, CONTACT_FORM_TYPES, CONTACT_PAGE_CONTENT } from './../../constants/contact-page-content.constant';
import { UserInterfaceService } from 'src/app/modules/shared/services/user-interface.service';

interface IDisplayOption {
  isShowNewClientEnquiryForm: boolean,
  isShowContactForm: boolean,
  isShowSupportTicketForm: boolean,
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
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

  showForm(name: CONTACT_FORM_TYPES | null | undefined ): void {
    for (const key in this.displayOptions) {
      this.displayOptions[key as keyof IDisplayOption] = false;
    }
    switch (name) {
      case CONTACT_FORM_TYPES.NEW_CLIENT_ENQUIRY:
        this.displayOptions.isShowNewClientEnquiryForm = true;
        break;
      case CONTACT_FORM_TYPES.CONTACT:
        this.displayOptions.isShowContactForm = true;
        break;
      case CONTACT_FORM_TYPES.SUPPORT_TICKET:
        this.displayOptions.isShowSupportTicketForm = true;
        break;
      default:
        break;
    }
  } 

  onEnquireNowClicked(): void {
    this.showForm(CONTACT_FORM_TYPES.NEW_CLIENT_ENQUIRY);
    setTimeout(() => {
      this.uiService.scrollToId(CONTACT_FORM_IDS.NEW_CLIENT_ENQUIRY, -136);
    }, 200);
  }

  onContactUsClicked(): void {
    this.showForm(CONTACT_FORM_TYPES.CONTACT);
    setTimeout(() => {
      this.uiService.scrollToId(CONTACT_FORM_IDS.CONTACT, -136);
    }, 200);
  }

  onSubmitTicketClicked(): void {
    this.showForm(CONTACT_FORM_TYPES.SUPPORT_TICKET);
    setTimeout(() => {
      this.uiService.scrollToId(CONTACT_FORM_IDS.SUPPORT_TICKET, -136);
    }, 200);
  }
}
