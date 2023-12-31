import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApiService {
  countries$ = new BehaviorSubject([]);
  constructor(private http: HttpClient) {}
}
