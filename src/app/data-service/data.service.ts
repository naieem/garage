import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  apiRoot: string;
  constructor(private http: HttpClient) {
    this.apiRoot = 'https://itunes.apple.com/search';
  }

  getSong(term: string): Observable<any[]> {
    const url = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    // return this.http.get( url );
    return this.http.get(url).map((val: any) => val.results);
    // .pipe(
    //   tap(_ => this.log(`found heroes matching "${term}"`)),
    //   catchError(this.handleError('getSong', []))
    // );
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}

class ItemResponse {
  constructor(trackName: string, artistName: string, trackViewUrl: string,
    artworkUrl30: string, artistId: string) {
  }
}
