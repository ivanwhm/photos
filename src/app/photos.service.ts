import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_URL = 'https://api.unsplash.com';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhoto(): Observable<any> {
    return this.http.get(`${API_URL}/photos/random`, {
      headers: {
        Authorization: 'Client-ID L6iJKjKHWCd4FgQqClNNcp01gmc9MG6MOXgjXJ6mqDY',
      },
    });
  }
}
