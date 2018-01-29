import { Injectable } from '@angular/core';

import {Http} from '@angular/http';
// ----------- RXJS section ------------//
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';
@Injectable()
export class DataService {
  apiRoot: string;
  constructor(private http: Http) {
    this.apiRoot = 'https://itunes.apple.com/search';
  }

  getSong(term: string) {
    const url = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get( url );
  }

}

class ItemResponse {
  constructor(trackName: string, artistName: string, trackViewUrl: string,
    artworkUrl30: string, artistId: string) {
  }
}
