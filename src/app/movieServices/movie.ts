import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'https://www.omdbapi.com/?apikey=2ee2ed84';

  constructor(private http: HttpClient) {}

  GetMovieData(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&s=${query}`);
  }
  GetMovieById(id: string): Observable<any> {
  return this.http.get(`https://www.omdbapi.com/?apikey=2ee2ed84&i=${id}`);
  
}
GetMovieDetails(id: string): Observable<any> {
  return this.http.get(`${this.apiUrl}&i=${id}`);
}

}
