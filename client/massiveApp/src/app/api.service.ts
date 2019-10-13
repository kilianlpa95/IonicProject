import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { MillUser } from './millUser';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:8080/api/millUser';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getMillUsers(): Observable<MillUser[]> {
    return this.http.get<MillUser[]>(apiUrl + "s")
      .pipe(
        tap(millUser => console.log('fetched millUsers')),
        catchError(this.handleError('getMillUsers', []))
      );
  }
  
  getMillUser(id: any): Observable<MillUser> {
    const url = `${apiUrl}s/${id}`;
    return this.http.get<MillUser>(url).pipe(
      tap(_ => console.log(`fetched millUser id=${id}`)),
      catchError(this.handleError<MillUser>(`getMillUser with id=${id}`))
    );
  }
  
  addMillUser(millUser: MillUser): Observable<MillUser> {
    return this.http.post<MillUser>(apiUrl, millUser, httpOptions).pipe(
      tap((usr: MillUser) => console.log(`added millUser with id=${usr.id}`)),
      catchError(this.handleError<MillUser>('addMillUser'))
    );
  }
  
  updateMillUser(id: any, millUser: any): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, millUser, httpOptions).pipe(
      tap(_ => console.log(`updated millUser id=${id}`)),
      catchError(this.handleError<any>('updateMillUser'))
    );
  }
  
  deleteMillUser(id: any): Observable<MillUser> {
    const url = `${apiUrl}/${id}`;
  
    return this.http.delete<MillUser>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted millUser id=${id}`)),
      catchError(this.handleError<MillUser>('deleteMillUser'))
    );
  }
  
}
