import { Injectable } from '@angular/core';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { of } from 'rxjs/observable/of';
import { Observable } from "rxjs/Observable";
import { Address } from "./address.model";

@Injectable()
export class TransferService {
  apiUrl = 'http://127.0.1.1/laravel56/public';
  allUrl: string = '/addresses';
  queryUrl: string = '/addresses/';

  constructor(private http: HttpClient) { }

  private setHeaders(): HttpHeaders {
      const headersConfig = {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
      };
      return new HttpHeaders(headersConfig);
  }

  search(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    if(term !== '') {
      return this.http.get<Address[]>(this.apiUrl + this.queryUrl + term)
    } else {
      return this.http.get<Address[]>(this.apiUrl + this.allUrl);
    }
  }

  public getAddresses(): Observable<Address[]> {
    return this.http.get<Address[]>(this.apiUrl + this.allUrl)
  }
}
