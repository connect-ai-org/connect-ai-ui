import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/modules/home/services/contacts.service';
import { UserInterfaceService } from '../../services/user-interface.service';
import { getErrorMessageOfFormControlName } from '../../helpers/form.helper';
import { ISupportTicket } from 'src/app/modules/home/models/contacts.model';
import { HTTP_STATUSES } from '../../constants/http.constant';
import { CONTACT_FORM_IDS } from 'src/app/modules/home/constants/contact-page-content.constant';

@Component({
  selector: 'app-support-ticket-form',
  templateUrl: './support-ticket-form.component.html',
  styleUrls: ['./support-ticket-form.component.scss']
})
export class SupportTicketFormComponent implements OnInit {
  @Output() submitted = new EventEmitter();

  @ViewChild('ngForm')
  ngForm!: NgForm;

  attachments: File[] = [];

  form = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', Validators.required),
    ticket: new FormControl('', Validators.required),
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
    const data: ISupportTicket = {
      firstName: formValue.firstName || '',
      lastName: formValue.lastName || '',
      email: formValue.email || '',
      phone: formValue.phone || '',
      ticket: formValue.ticket || '',
      attachments: this.attachments
    };

    this.contactsService
    .createSupportTickets(data)
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
        this.uiService.showAlert(e.message);
      }
    });
  }

}
