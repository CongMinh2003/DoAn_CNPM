import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaoCao } from '../models/baocao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BaocaoService {

  private apiUrl = 'http://localhost:8080/api/bao-cao';

  constructor(private http: HttpClient) {}

  createReport(baoCao: BaoCao): Observable<string> {
    return this.http.post<string>(this.apiUrl, baoCao);
  }
}
