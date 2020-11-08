import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

const API_URL = 'https://api.unsplash.com';

interface UnsplashResponse {
  urls: {
    small: string;
  };
}

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhoto(): Observable<string> {
    return this.http
      .get<UnsplashResponse>(`${API_URL}/photos/random`, {
        headers: {
          Authorization: 'Client-ID <USE YOUR ON ACCESS KEY HERE!!>',
        },
      })
      .pipe(pluck('urls', 'small'));
  }
}
