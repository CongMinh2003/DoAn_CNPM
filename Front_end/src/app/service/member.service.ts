import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  private apiUrl = 'http://localhost:8080/api/thanhvien/register'; 

  constructor(private http: HttpClient) {}

  
  registerMember(memberData: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, memberData);
  }

  
  
}
