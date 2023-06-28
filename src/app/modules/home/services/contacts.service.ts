import { NewClientEnquiry } from './../models/contacts.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { getServer } from '../../shared/helpers/server.helper';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  error = new Subject<string>();
  url = getServer();

  constructor(private http: HttpClient) {}

  createNewClientEnquiry(data: NewClientEnquiry): Observable<any> {
    return this.http.post<any>(
      `${this.url}/newClientEnquiries`,
      data, 
      {
        observe: 'response'
      }
    );
  }
}