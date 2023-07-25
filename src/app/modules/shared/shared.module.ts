import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { MaterialModule } from "./material.module";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { ContactFormComponent } from "./components/contact-form/contact-form.component";
import { NewClientEnquiryFormComponent } from "./components/new-client-enquiry-form/new-client-enquiry-form.component";
import { SupportTicketFormComponent } from "./components/support-ticket-form/support-ticket-form.component";
import { FilesDragDropComponent } from "./components/files-drag-drop/files-drag-drop.component";

const modules = [
  CommonModule,
  MaterialModule,
  IonicModule,
  ReactiveFormsModule,
  HttpClientModule
];

const components = [
  ContactFormComponent,
  NewClientEnquiryFormComponent,
  SupportTicketFormComponent,
  FilesDragDropComponent,
];
@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    ...components,
  ]
})
export class SharedModule {}