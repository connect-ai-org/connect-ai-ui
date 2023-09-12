import { IContact, INewClientEnquiry, ISupportTicket } from './../models/contacts.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  error = new Subject<string>();
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  createNewClientEnquiry(data: INewClientEnquiry): Observable<any> {
    return this.http.post<any>(
      `${this.apiURL}/newClientEnquiries`,
      data, 
      {
        observe: 'response'
      }
    );
  }

  createContact(data: IContact): Observable<any> {
    return this.http.post<any>(
      `${this.apiURL}/contacts`,
      data, 
      {
        observe: 'response'
      }
    );
  }

  createSupportTickets(data: ISupportTicket): Observable<any> {
    const formData = new FormData();

    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);
    formData.append('phone', data.phone);
    formData.append('ticket', data.ticket);

    if (data && data.attachments && data.attachments.length > 0) {
      data.attachments.forEach((file: File) => {
        formData.append('files', file);
      });
    }

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Disposition' : 'multipart/form-data' }),
    };
    
    return this.http.post<any>(
      `${this.apiURL}/supportTickets`,
      formData, 
      {
        ...httpOptions,
        observe: 'response'
      }
    );
  }
}