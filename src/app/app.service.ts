import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ServiceNameService {
  private url = 'https://bob-demo.vercel.app';

  constructor(private _http: HttpClient) {}

  getAllCountry(offset?: string, limit?: string): Observable<any[]> {
    return this._http.get<any[]>(this.url, {
      params: {
        limit: limit || '',
        offset: offset || '',
      },
    });
  }
}
