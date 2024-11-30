import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sach } from '../models/sach.model';

@Injectable({
  providedIn: 'root'
})
export class SachService {

  private apiUrl = 'http://localhost:8080/api/sach/all';

  constructor(private http: HttpClient) { }

  getSachList(): Observable<Sach[]> {
    return this.http.get<Sach[]>(this.apiUrl);
  }

  searchBooksByName(name: string): Observable<Sach[]> {
    return this.http.get<Sach[]>(`http://localhost:8080/api/sach/search?name=${name}`);
  }
  
  addSach(sach: Sach): Observable<Sach> {
    const apiUrl = 'http://localhost:8080/api/sach/add';
    return this.http.post<Sach>(apiUrl, sach);
  }

  deleteSachByName(tenSach: string): Observable<void> {
    const url = `http://localhost:8080/api/sach/delete/${tenSach}`;
    return this.http.delete<void>(url);
  }

  updateSachByName(tenSach: string, updatedBook: Partial<Sach>): Observable<void> {
    const url = `http://localhost:8080/api/sach/update/${tenSach}`;
    return this.http.put<void>(url, updatedBook);
  }
  
  
}
