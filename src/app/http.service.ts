import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = 'http://127.0.0.1:3000/api';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  private httpOptionsENC = {
    headers: new HttpHeaders({
      'enctype': 'multipart/form-data'
    })
  };

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    let url = this.baseUrl + '/post';
    return this.http.get<Post[]>(url).pipe(
      tap(heroes => console.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
    );;
  }

  createPost(post): Observable<any> {
    let url = this.baseUrl + '/post';
    return this.http.post<any>(url, post, this.httpOptionsENC).pipe(
      tap(heroes => console.log('fetched heroes')),
      catchError(this.handleError('getHeroes', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
   
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
   
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
