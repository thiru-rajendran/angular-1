import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiUrl = "http://localhost:8080"

  constructor(private http: HttpClient) {

  }

  getCategories(): Observable<any>{
    return this.http.get(`${this.apiUrl}/category`);
  }
}
