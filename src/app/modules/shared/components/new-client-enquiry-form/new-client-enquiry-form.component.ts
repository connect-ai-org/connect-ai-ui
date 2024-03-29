import { INDUSTRY_OPTIONS } from './../../constants/form.constant';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { getErrorMessageOfFormControlName } from '../../helpers/form.helper';
import { INewClientEnquiry } from 'src/app/modules/home/models/contacts.model';
import { ContactsService } from 'src/app/modules/home/services/contacts.service';
import { HTTP_STATUSES } from '../../constants/http.constant';
import { UserInterfaceService } from '../../services/user-interface.service';
import { CONTACT_FORM_IDS } from 'src/app/modules/home/constants/contact-page-content.constant';

@Component({
  selector: 'app-new-client-enquiry-form',
  templateUrl: './new-client-enquiry-form.component.html',
  styleUrls: ['./new-client-enquiry-form.component.scss']
})
export class NewClientEnquiryFormComponent implements OnInit {
  @Output() submitted = new EventEmitter();

  @ViewChild('ngForm')
  ngForm!: NgForm;
  
  form = new FormGroup({
    businessName: new FormControl('', [Validators.required]),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    jobTitle: new FormControl('', []),
    isBusinessOwner: new FormControl(null, []),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    website: new FormControl('', []),
    industry: new FormControl(null, Validators.required),
    hasMarketingPlan: new FormControl(null, []),
    description: new FormControl('', Validators.required),
    knownBy: new FormControl('', Validators.required),
    hasAlreadyWorkedWithMarketingAgency: new FormControl(null, []),
  });

  INDUSTRY_OPTIONS = INDUSTRY_OPTIONS;
  CONTACT_FORM_IDS = CONTACT_FORM_IDS;

  constructor(
    private contactsService: ContactsService,
    private uiService: UserInterfaceService
  ) { }

  ngOnInit(): void {
  }

  getErrorMessage(formControlName: string): string {
    return getErrorMessageOfFormControlName(this.form, formControlName);
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const formValue = this.form.getRawValue();
    const data: INewClientEnquiry = {
      businessName: formValue.businessName || '',
      firstName: formValue.firstName || '',
      lastName: formValue.lastName || '',
      email: formValue.email || '',
      phone: formValue.phone || '',
      jobTitle: formValue.jobTitle || '',
      isBusinessOwner: formValue.isBusinessOwner ? true : false,
      website: formValue.website || '',
      industry: formValue.industry || '',
      hasMarketingPlan: formValue.hasMarketingPlan ? true : false,
      description: formValue.description || '',
      knownBy: formValue.knownBy || '',
      hasAlreadyWorkedWithMarketingAgency: formValue.hasAlreadyWorkedWithMarketingAgency ? true : false,
    };
    
    this.contactsService
      .createNewClientEnquiry(data)
      .subscribe({
        next: (v) => { 
          if (v.status === HTTP_STATUSES.CREATED) {
            this.uiService.showAlert('Submitted Successfully')
            this.form.reset();
            this.ngForm.resetForm();
            this.submitted.emit();
          }
        },
        error: (e) => {
          console.log(e)
          this.uiService.showAlert(e.message);
        }
      });
  }
 
}
