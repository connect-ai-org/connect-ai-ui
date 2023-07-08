import { Component, OnInit, ViewChild } from '@angular/core';
import { CONTACT_PAGE_CONTENT, CONTACT_FORM } from './../../constants/contact-page-content.constant';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserInterfaceService } from 'src/app/modules/shared/services/user-interface.service';
import { getErrorMessage } from 'src/app/modules/shared/helpers/form.helper';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {
  CONTACT_PAGE_CONTENT;
  CONTACT_FORM = CONTACT_FORM;

  @ViewChild('ngNewClientEnquiryForm')
  ngNewClientEnquiryForm!: NgForm;

  isShowNewClientEnquiryForm: boolean = false;
  isShowContactForm: boolean = false;

  newClientEnquiryForm = new FormGroup({
    businessName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });

  contactForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required])
  });

  constructor(
    private uiService: UserInterfaceService,
  ) {
    this.CONTACT_PAGE_CONTENT = CONTACT_PAGE_CONTENT(this);
  }

  ngOnInit(): void {
  }

  onEnquireNowClicked(): void {
    this.isShowContactForm = false;
    this.isShowNewClientEnquiryForm = true;

    setTimeout(() => {
      this.uiService.scrollToId('new-client-enquiry-form');
    }, 200);
  }

  onContactUsClicked(): void {
    this.isShowContactForm = true;
    this.isShowNewClientEnquiryForm = false;

    setTimeout(() => {
      this.uiService.scrollToId('contact-form');
    }, 200);
  }

  getErrorMessage(formGroup: FormGroup, formControlName: string): string {
    const control: FormControl = formGroup.get(formControlName) as FormControl;
    if (control) {
      return getErrorMessage(control);
    }
    return '';
  }

  onSubmit(type: number): void {

  }

}
