import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TraSach } from '../models/tra-sach.model';

@Injectable({
  providedIn: 'root'
})
export class TraSachService {

  private apiUrl = 'http://localhost:8080/api/tra-sach';
  private searchApiUrl = 'http://localhost:8080/api/tra-sach/search';

  constructor(private http: HttpClient) {}

  returnBook(TraSach: TraSach): Observable<string> {
    return this.http.post(this.apiUrl, TraSach, { responseType: 'text' });
  }

  getAllReturnInfo(): Observable<TraSach[]> {
    return this.http.get<TraSach[]>(this.apiUrl);
  }

   searchByMemberName(memberName: string): Observable<TraSach[]> {
    return this.http.get<TraSach[]>(`${this.searchApiUrl}?memberName=${memberName}`);
  }
}
