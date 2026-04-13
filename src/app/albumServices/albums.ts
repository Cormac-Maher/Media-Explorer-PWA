import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumService {
  private apiUrl = 'https://itunes.apple.com/search?media=music&entity=album';

  constructor(private http: HttpClient) {}

  GetAlbumData(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&term=${query}`);
  }
}