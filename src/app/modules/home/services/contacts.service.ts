import { NewClientEnquiry } from './../models/contacts.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ContactsService {
  error = new Subject<string>();
  apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  createNewClientEnquiry(data: NewClientEnquiry): Observable<any> {
    return this.http.post<any>(
      `${this.apiURL}/newClientEnquiries`,
      data, 
      {
        observe: 'response'
      }
    );
  }
}