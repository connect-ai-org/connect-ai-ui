import { IContact, INewClientEnquiry, ISupportTicket } from './../models/contacts.model';
import { HttpClient } from '@angular/common/http';
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
    return this.http.post<any>(
      `${this.apiURL}/supportTickets`,
      data, 
      {
        observe: 'response'
      }
    );
  }
}