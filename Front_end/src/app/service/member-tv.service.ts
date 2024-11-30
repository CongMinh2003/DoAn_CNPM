import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemberTVService {

  private apiUrl = 'http://localhost:8080/api/thanhvien/list';  

  constructor(private http: HttpClient) {}

  getMembers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  searchMembersByName(name: string): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:8080/api/thanhvien/search?name=${name}`);
  }

  deleteMemberByName(tenThanhVien: string): Observable<void> {
    return this.http.delete<void>(`http://localhost:8080/api/thanhvien/delete/${tenThanhVien}`);
  }
  
  updateMemberByName(member: { tenThanhVien: string; diaChi: string; email: string }): Observable<void> {
    return this.http.put<void>(`http://localhost:8080/api/thanhvien/update/${member.tenThanhVien}`, member);
  }

}
