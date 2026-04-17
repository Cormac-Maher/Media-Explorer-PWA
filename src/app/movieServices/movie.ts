import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private apiUrl = 'http://www.omdbapi.com/?i=tt3896198&apikey=c3d50da3';

  constructor(private http: HttpClient) {}

  GetMovieData(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}&s=${query}`);
  }
  GetMovieById(id: string): Observable<any> {
  return this.http.get(` http://www.omdbapi.com/?i=tt3896198&apikey=c3d50da3&i=${id}`);
  
}
GetMovieDetails(id: string): Observable<any> {
  return this.http.get(`${this.apiUrl}&i=${id}`);
}

}
