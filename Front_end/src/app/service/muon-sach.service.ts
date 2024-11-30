import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MuonSach } from '../models/muon-sach.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MuonSachService {

  private apiUrl = 'http://localhost:8080/api/muon-sach';
  private searchApiUrl = 'http://localhost:8080/api/muon-sach/search';


  constructor(private http: HttpClient) {}

  borrowBook(muonSach: MuonSach): Observable<string> {
    return this.http.post(this.apiUrl, muonSach, { responseType: 'text' });
  }

  getAllMuonSach(): Observable<MuonSach[]> {
    return this.http.get<MuonSach[]>(this.apiUrl);
  }

  searchByMemberName(memberName: string): Observable<MuonSach[]> {
    return this.http.get<MuonSach[]>(`${this.searchApiUrl}?memberName=${memberName}`);
  }
}
