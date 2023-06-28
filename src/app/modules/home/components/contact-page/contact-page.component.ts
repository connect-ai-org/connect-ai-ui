import { Component, OnInit, ViewChild } from '@angular/core';
import { CONTACT_PAGE_CONTENT, CONTACT_FORM } from './../../constants/contact-page-content.constant';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserInterfaceService } from 'src/app/modules/shared/services/user-interface.service';
import { getErrorMessage } from 'src/app/modules/shared/helpers/form.helper';
import { ContactsService } from '../../services/contacts.service';
import { NewClientEnquiry } from '../../models/contacts.model';
import { HTTP_STATUSES } from 'src/app/modules/shared/constants/http.constant';
import { MatSnackBar } from '@angular/material/snack-bar';

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
    private contactsService: ContactsService,
    private _snackBar: MatSnackBar
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
    switch(type) {
      case CONTACT_FORM.NEW_CLIENT_ENQUIRY:
        this.submitNewClientEnquiryForm();
        break;
      case CONTACT_FORM.CONTACT:
        this.submitContactForm();
        break;
      default:
        break;
    }
  }

  submitNewClientEnquiryForm(): void {
    if (this.newClientEnquiryForm.invalid) {
      return;
    }
    const formValue = this.newClientEnquiryForm.getRawValue()
    const data: NewClientEnquiry = {
      businessName: formValue.businessName || '',
      email: formValue.email || '',
      firstName: formValue.firstName || '',
      lastName: formValue.lastName || '',
    };
    this.contactsService
      .createNewClientEnquiry(data)
      .subscribe((res: any) => {
        if (res.status === HTTP_STATUSES.CREATED) {
          this.uiService.showAlert('Send data successfully!')
          this.newClientEnquiryForm.reset();
          this.ngNewClientEnquiryForm.resetForm();
        } else {
          this.uiService.showAlert('Failed');
        }
      });
  }

  submitContactForm(): void {
    if (this.contactForm.invalid) {
      return;
    }
  }

}
