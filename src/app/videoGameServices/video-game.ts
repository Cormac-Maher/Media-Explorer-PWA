import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VideoGameService {
  private apiUrl = 'https://api.rawg.io/api/games?key=c4478162d03d49bca5e00ba50535187d';

  constructor(private http: HttpClient) {}

  GetVideoGameData(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&search=${query}`);
  }
}