import { CONTACT_FORM_IDS } from './../../../home/constants/contact-page-content.constant';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { UserInterfaceService } from '../../services/user-interface.service';
import { ContactsService } from 'src/app/modules/home/services/contacts.service';
import { getErrorMessageOfFormControlName } from '../../helpers/form.helper';
import { IContact } from 'src/app/modules/home/models/contacts.model';
import { HTTP_STATUSES } from '../../constants/http.constant';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @ViewChild('ngForm')
  ngForm!: NgForm;

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    company: new FormControl('', []),
    message: new FormControl('', Validators.required),
  });

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
    const data: IContact = {
      firstName: formValue.firstName || '',
      lastName: formValue.lastName || '',
      email: formValue.email || '',
      phone: formValue.phone || '',
      message: formValue.message || '',
    };

    this.contactsService
    .createContact(data)
    .subscribe({
      next: (v) => { 
        if (v.status === HTTP_STATUSES.CREATED) {
          this.uiService.showAlert('Send data successfully!')
          this.form.reset();
          this.ngForm.resetForm();
        }
      },
      error: (e) => {
        this.uiService.showAlert(e.message);
      }
    });
  }
}
