import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(url: string, options?: object): Observable<any> {
    return this.http.get(url, options);
  }

  async getAsync(url: string, options?: object): Promise<any> {
    return await  this.http.get(url, options).toPromise();
  }

  post(url: string, payload: object, options?: object) {
    return this.http.post(url, payload, options);
  }

  put(url: string, payload: object, options?: object) {
    return this.http.put(url, payload, options);
  }

  delete(url: string, options?: object): Observable<any> {
    return this.http.delete(url, options);
  }
}
