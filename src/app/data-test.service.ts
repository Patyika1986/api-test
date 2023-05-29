import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTestService {

  constructor(private http: HttpClient) { }

  getData():Observable<any>{
   return this.http.get('http://localhost:3000/posts');
  }
}
